package com.cksmith.todolist.model;

import java.util.Date;

public class Item {

    private Integer id;
    private String createDate;
    private String title;
    private String category;
    private String description;

    public Integer getId() {
        return id;
    }

    public Item setId(Integer id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Item setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Item setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getCreateDate() {
        return createDate;
    }

    public Item setCreateDate(String date) {
        this.createDate = date;
        return this;
    }

    public String getCategory() {
        return category;
    }

    public Item setCategory(String category) {
        this.category = category;
        return this;
    }
}
