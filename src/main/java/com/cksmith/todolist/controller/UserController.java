package com.cksmith.todolist.controller;

import com.cksmith.todolist.model.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController("/user")
public class UserController {

    @CrossOrigin
    @PostMapping("/list")
    public List<User> listUsers(HttpServletRequest request) {

        return null;
    }

    @CrossOrigin
    @PostMapping("/add")
    public List<User> addUser(@RequestBody User user) {

        return null;
    }

    @CrossOrigin
    @PostMapping("/delete")
    public List<User> deleteUser(@RequestParam Integer userId) {

        return null;
    }

}
