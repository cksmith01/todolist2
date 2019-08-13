package com.cksmith.todolist.controller;

import com.cksmith.todolist.model.Item;
import com.cksmith.todolist.model.Message;
import org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Stack;

@RestController
public class HomeController {

    private SimpleDateFormat _sdf = new SimpleDateFormat("HH:mm:ss");
    private SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
    private int callCount;

    String _date = sdf.format(new Date());
    private Stack<Item> items = new Stack<>();
    {
        items.add(new Item().setId(1).setCategory("One").setTitle("title one").setDescription("first description and this is a cool one").setCreateDate(_date));
        items.add(new Item().setId(2).setCategory("Two").setTitle("title two").setDescription("two description, what a cool thing").setCreateDate(_date));
        items.add(new Item().setId(3).setCategory("Three").setTitle("title three").setDescription("three description, man life is great").setCreateDate(_date));
    }

    @CrossOrigin
    @GetMapping("/posts")
    public List<Item> getPosts(HttpServletRequest req) throws ServletException {
        System.out.println("getPosts: "+_sdf.format(new Date())+" items: "+items.size());
        return items;
    }

    @CrossOrigin
    @PostMapping("/addPost")
    public List<Item> addItem(@RequestBody Item item) throws ServletException {

        System.out.println("addItem: "+item.getId()); // CKS:WIP 2019-08-08

        // TODO: 2019-08-10 we should have a filter that checks for sql injection type stuff... 

        if (item.getId() == null || item.getId().intValue() == 0) {
            item.setId(items.size() + 1);
            items.add(item);
            System.out.println("added item: "+item.getTitle());
        } else {
            items.forEach(bean -> {
                if (bean.getId().intValue() == item.getId().intValue()) {
                    bean.setTitle(item.getTitle());
                    bean.setDescription(item.getDescription());
                    bean.setCategory(item.getCategory());
                    bean.setCreateDate(item.getCreateDate());
                }
            });
        }

//        items.forEach(bean -> System.out.println(bean.getId()+"|"+bean.getTitle()+"|"+bean.getDescription()));
        return items;
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

        items.forEach(bean -> System.out.println(bean.getId()+"|"+bean.getTitle()+"|"+bean.getDescription()));
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
