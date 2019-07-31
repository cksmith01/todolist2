package com.cksmith.todolist.controller;

import com.cksmith.todolist.model.Item;
import com.cksmith.todolist.model.Message;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Stack;

@RestController
public class HomeController {

    private SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
    private int callCount;

    private Stack<Item> items = new Stack<>();
    {
        items.add(new Item().setId(1).setTitle("title one").setDescription("first description and this is a cool one"));
        items.add(new Item().setId(2).setTitle("title two").setDescription("two description, what a cool thing"));
        items.add(new Item().setId(3).setTitle("title three").setDescription("three description, man life is great"));
    }

    @CrossOrigin
    @GetMapping("/posts")
    public List<Item> getPosts(HttpServletRequest req) throws ServletException {
        System.out.println("getPosts: "+sdf.format(new Date())+" items: "+items.size());
        return items;
    }

    @CrossOrigin
    @PostMapping("/addPost")
    public Item addItem(@RequestBody Item item) throws ServletException {
        item.setId(items.size()+1);
        items.add(item);
        System.out.println("added item: "+item.getTitle());
        items.forEach(bean -> System.out.println(bean.getId()+" "+bean.getTitle()));
        return item;
    }

    @CrossOrigin
    @GetMapping("/deletePost")
    public List<Item> deletePost(@RequestParam Integer id) throws ServletException {
        System.out.println("deletePost: "+id); // CKS:WIP

        Stack<Item> newList = new Stack<>();
        int count = 0;
        for (Item item:items) {
            if (item.getId() != id) {
                count++;
                item.setId(count);
                newList.add(item);
            }
        }
        items = newList;

        items.forEach(bean -> System.out.println(bean.getId()+" "+bean.getTitle()));
        return items;
    }

    @CrossOrigin
    @PostMapping("/sendMessage")
    public Message sendMessage(@RequestBody Message message) throws ServletException {
        callCount++;
        System.out.println("sendMessage: name: "+message.getName()+" message: "+message.getMessage());
        message.setResponse("message sent "+message.getName());
        return message;
    }
}
