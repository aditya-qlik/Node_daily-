const mongoose = require('mongoose');
const Store = mongoose.model('Store');
exports.myMiddleware = (req,res,next) => {
    req.name = 'Aditya';
    next();
}
exports.homePage = (req,res) => {
    console.log(req.name);
    // req.flash('error','Something Happened');
    // req.flash('info', 'Something Happened');
    // req.flash('warning', 'Something Happened');
    // req.flash('success', 'Something Happened');

    res.render('index');
}

exports.addStore= (req, res) =>{
    res.render('editStore', {title: 'Add Store'});

};
exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully created ${store.name}.
    care to leave review!?`);
    console.log('it worked');
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    // console.log(stores);
    res.render('stores',{title: 'Stores', stores});
};

exports.editStores = async (req, res) => {
    // res.json(req.params)
    const store = await Store.findOne({_id: req.params.id});
    // res.json(store);
    res.render('editStore', {title: `Edit ${store.name}`, store});
}

exports.updateStore = async (req,res) => {
    const store = await Store.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    }).exec();
    req.flash('success',`Successfully updated ${store.name} <a href="/stores/${store.slug}">View Store ➡</a>`);
    res.redirect(`/stores/${store._id}/edit`);
}