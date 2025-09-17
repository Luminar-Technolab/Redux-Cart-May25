import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add to cart - when add to cart btn clicked from view & wishlist
        addToCart :(state,action)=>{
            //find product is in state
            const exisitingProduct = state?.find(item=>item.id==action.payload.id)
            if(exisitingProduct){
                //increment quantity
                exisitingProduct.quantity++
                exisitingProduct.totalPrice = exisitingProduct.quantity*exisitingProduct.price
                //get remaining products other than existing
                const remainProducts = state.filter(item=>item.id!=exisitingProduct.id)
                state = [...remainProducts,exisitingProduct]
            }else{
                // add item to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // remove cart item - when delete btn clicked in cart component
        removeCartItem:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        //incrementquantity - when + btn cliked in cart
        incrementQuantity:(state,action)=>{
            //find product is in state
            const exisitingProduct = state?.find(item=>item.id==action.payload)
            exisitingProduct.quantity++
            exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
            const remainingProducts = state?.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,exisitingProduct]
        },
        //decrement quantity- when - btn cliked in cart
        decrementQuantity:(state,action)=>{
            //find product is in state
            const exisitingProduct = state?.find(item=>item.id==action.payload)
            exisitingProduct.quantity--
            exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
            const remainingProducts = state?.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,exisitingProduct]
        },
        //empty cart
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const {addToCart,removeCartItem,incrementQuantity,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer