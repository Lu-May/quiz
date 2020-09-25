package com.twuc.shopping.api;

@RestController

public class ShoppingController {
    private List rsList = new ArrayList();

    @GetMapping("/product/list")
    public List getOneProduct() {
        return rsList.get();
    }
}