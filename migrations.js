'use strict'

const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: "node_library"
})

db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

const createBooksTable = () => {
    let sql = `
        create table books (
            id int unsigned auto_increment primary key,
            title varchar(191) not null,
            author varchar(50) not null,
            year int unsigned not null,
            stock int unsigned default 0,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp null on update current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table books has been created!')
    })
}

const createUsersTable = () => {
    let sql = `
        create table users (
            id int unsigned auto_increment primary key,
            username varchar(100) not null,
            password varchar(255) not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp null on update current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table users has been created!')
    })
}

const createUserBookTable = () => {
    let sql = `
        create table user_book (
            id int unsigned auto_increment primary key,
            user_id int not null,
            book_id int not null,
            created_at timestamp default current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table user_book has been created!')
    })
}

createBooksTable()
createUsersTable()
createUserBookTable()
