import { DELETE, INSERT } from "sequelize/lib/query-types";
import dtb from 'mysql2';

export const con = dtb.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "yatch-project",
    port: 3308
})

export function addYatch (name, origin, price, kind) {
    con.connect(function(err) {
        console.log(err);
    if (err) throw err;
    var sql = `INSERT INTO yatch (yatch_name, yatch_origin, yatch_price, yatch_kind) VALUES (?,?,?,?)`;
    console.log(sql);
    con.query(sql,[name,origin,price,kind],function(err,result){
        if (err) throw err;
        console.log("Yatch Insert Complete!")
    })
})};
export function deleteYatch (name) {
    con.connect(function(err) {
        console.log(err);
    if (err) throw err;
    var sql = `DELETE FROM yatch WHERE yatch_id = ?`;
    console.log(sql);
    con.query(sql,name,function(err,result){
        if (err) throw err;
        console.log("Yatch Delete Successfully")
    })
})};
export function updateYatchName (name1, name2, id) {
    if (name2=='') {
        name2 = name1;
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_name = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[name2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
export function updateYatchOrigin (origin1, origin2, id) {
    if (origin2=='') {
        origin2 = origin1;
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_origin = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[origin2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
export function updateYatchPrice (price1, price2, id) {
    if (price2=='') {
        price2 = price1;
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_price = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[price2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
export function updateYatchKind (kind1, kind2, id) {
    if (kind2=='') {
        kind2 = kind1;
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_kind = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[kind2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
export function updateYatchImg (img1, img2, id) {
    if (img2=='') {
        img2 = img1
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_img = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[img2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
export function updateYatchLength (length1, length2, id) {
    if (length2=='') {
        length2 = length1
    }
    con.connect(function(err){
        console.log(err);
        if(err) throw err;
        var sql = `UPDATE yatch SET yatch_length = ? WHERE yatch_id = ?`;
        console.log(sql);
        con.query(sql,[length2,id],function(err,result){
            if (err) throw err;
            console.log("Yatch Updated Successfully")
    })
    })
}
