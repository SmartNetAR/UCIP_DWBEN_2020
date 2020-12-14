import { Router } from 'express' ;

const router = Router();

router.get ('/', (req, res) => {
    res.status(200).json({
        msg: "tasks"
    })
})
router.get ('/:id', (req, res) => {
    res.status(200).json({
        id: req.params.id,
        msg: "tasks"
    })
})

export default router;