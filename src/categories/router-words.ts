import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoriesById, selectWordsFromCategory, updateCategory } from "./repository";

/*interface Category {
    id: number,
    name: string,
    image: string
}*/

const router = Router();

/*router.delete('/:id', async(req, res)=>{
    const catId = Number(req.params.id);
    if (!catId){
        return res.sendStatus(400);
    }
    try {
        await deleteCategory(catId);
        return res.sendStatus(200);
    } catch (e){
        return res.sendStatus(404).send(e);
    }
})

router.get('/', async (req, res)=>{
    const categories = await getCategories();
    res.json(categories);
});*/

router.get('/:name', async (req, res)=>{
    const catName = req.params.name;
    if (!catName){
        return res.sendStatus(400);
    }
    const words =  selectWordsFromCategory(catName);
    if (!words){
        return res.sendStatus(400);
    }
    res.json(words);

});/*

router.post('/', async(req, res)=>{
    const data = req.body as Category;
    if (!data.name) return res.sendStatus(400);
    try {
        const newCategory = await createCategory(data);
        return res.json(newCategory);
    } catch (e) {
        return res.status(400).send(e);
    }
})

router.put('/', async(req, res)=>{
    const data = req.body as Category;
    if (!data.name) return res.sendStatus(400);
    try {
        const updatedCategory = await updateCategory(data);
        return res.json(updatedCategory);
    } catch (e) {
        return res.status(400).send(e);
    }
})*/

export default router;