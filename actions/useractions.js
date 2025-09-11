"use server"
import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/app/models/User"


export const initiate = async (amount, to_username, paymentform) => {

    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret;

    await connectDB();
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    const newPayment = await Payment.create({
        order_id: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })
    return {
        order: {
            id: x.id,
            amount: x.amount,
            currency: x.currency,
        },
        payment: {
            _id: newPayment._id.toString(),
            name: newPayment.name,
            to_user: newPayment.to_user,
            order_id: newPayment.order_id,
            message: newPayment.message,
            amount: newPayment.amount,
            done: newPayment.done,
            createdAt: newPayment.createdAt.toISOString(),
            updatedAt: newPayment.updatedAt.toISOString(),
        }
    };

}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) return null;

    return {
        _id: u._id.toString(),
        name: u.name,
        email: u.email,
        username: u.username,
        profilepic: u.profilepic,
        coverpic: u.coverpic,
        razorpayid: u.razorpayid,
        razorpaysecret: u.razorpaysecret,
        createdAt: u.createdAt.toISOString(),
        updatedAt: u.updatedAt.toISOString(),
    };
};

export const fetchpayments = async (username) => {
    await connectDB();
    // find all payments sorted by decreasing order of amount and flatten ObjectIds
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean();

    return p.map(pay => ({
        ...pay,
        _id: pay._id.toString(),
        createdAt: pay.createdAt.toISOString(),
        updatedAt: pay.updatedAt.toISOString(),
    }));
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();
    let ndata = Object.fromEntries(data)

    // if the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
    }

    await User.updateOne({ email: ndata.email }, ndata)
}