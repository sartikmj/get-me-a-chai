import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    //Check if razorpayOrderId is presenet on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })

    if(!p){
        return NextResponse.json({ success: false, message: "Order not found" })
    }

    //Verify the payment 
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, 
        "payment_id": body.razorpay_payment_id}, body.razorpay_signature, process.env.KEY_SECRET)
    
    if(xx){
        //update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id },
            { done: "true"},
            { new: true }
        )
        return NextResponse.redirect(`${process.env.URL}/${updatedPayment.to_user}?paymentdone=true`)
    }

    else{
        return NextResponse.error("Payment Verification failed", {status: 400})
    }
}