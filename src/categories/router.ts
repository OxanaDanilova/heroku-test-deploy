import { Router } from "express";
import { getCategories, getCategoriesById } from "./repository";

const router = Router();

router.get('/', async (req, res)=>{
    const categories = await getCategories();
    res.json(categories);
});

router.get('/:id', async (req, res)=>{
    const catId = Number(req.params.id);
    if (!catId){
        return res.sendStatus(400);
    }
    const cat = await getCategoriesById(catId);
    if (!cat){
        return res.sendStatus(400);
    }
    res.json(cat);

});

export default router;