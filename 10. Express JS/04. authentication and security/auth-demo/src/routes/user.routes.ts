import { Router, Request, Response } from "express";
import { authorize, isAuthenticated } from "../middleware/auth";

const router = Router();
const users = [
    { id: 1, username: 'admin', password: "admin123", role: "admin" },
    { id: 2, username: 'sonam', password: "sonam123", role: "user" }
]
router.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username
        && u.password === password);

    if (!user) {
        return res.status(401).json({
            message: 'Invalid username and password'
        })
    }
    // if session not created
    req.session.regenerate((err) => {
        if (err) {
            return res.status(500).json({
                message: "session creation failed"
            })
        }
        req.session.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }
    })


    return req.session.save((err) => {
        if (err) {
            return res.status(500).json({
                message: "session save failed"
            })
        }

        return res.json({
            message: 'Login Successful',
            user: req.session.user
        })
    })

})

router.get('/public', (req: Request, res: Response) => {
    res.json({
        message: 'Anyone can Access this API'
    })
})

router.get('/profile', isAuthenticated, (req: Request, res: Response) => {
    res.json({
        message: 'Welcome to your Profile!',
        user: req.session.user
    })
})


router.get('/admin', isAuthenticated, authorize('admin'), (req: Request, res: Response) => {
    res.json({
        message: 'Welcome Admin! You have full Access!'
    })
})

router.get('/user', isAuthenticated, authorize('user'), (req: Request, res: Response) => {
    res.json({
        message: 'Welcome User!'
    })
})

router.get('/logout', isAuthenticated, (req: Request, res: Response) => {

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                message: "Logout failed"
            })
        }
    })

    res.clearCookie('connect.sid');
    res.json({
        message: 'Logout Successful!'
    })
})

export default router;