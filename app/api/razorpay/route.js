import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/app/models/User";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    //Check if razorpayOrderId is presenet on the server
    let p = await Payment.findOne({ order_id: body.razorpay_order_id })

    if(!p){
        return NextResponse.json({ success: false, message: "Order not found" })
    }

    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret;

    //Verify the payment 
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, 
        "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)
    
    if(xx){
        //update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ order_id: body.razorpay_order_id },
            { done: true},
            { new: true }
        )
        // return NextResponse.redirect(`${process.env.URL}/${updatedPayment.to_user}?paymentdone=true`)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`); //By ChatGPT
    }

    else{
        return NextResponse.error("Payment Verification failed", {status: 400})
    }
}