//@login and register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../../models/User");
const keys = require("../../config/keys");
const passport = require("passport");


//$route GET api/users/test
//@desc  返回的请求数据
//@access public
router.get("/test", (req, res) => {
    res.json({ msg: "login works" })
})

//$route POST api/users/register
//@desc  返回的请求数据
//@access public
router.post("/register", (req, res) => {
    console.log(req.body);

    //邮箱验证 
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json('邮箱已被注册!')
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    identity: req.body.identity,
                })
                //bcrypt加密
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;

                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
})

//$route POST api/users/login
//@desc  返回token jwt passport
//@access public
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //用户验证
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json('用户不存在！')
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const rule = {
                            id: user.id,
                            name: user.name,
                            identity: user.identity,
                        };
                        jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        })
                        // res.json({msg:"success"})
                    } else {
                        return res.status(400).json('密码错误!')
                    }
                })

        })
})

//$route GET api/users/current
//@desc  返回current user
//@access Private
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        identity: req.user.identity,
    });
})

module.exports = router;