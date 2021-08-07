import React, { useEffect, useRef } from "react";
import {
    PaymentDisplay,
    Pincode,
    ProductDisplay,
    ProductMain,
    Invoice,
    Product,
    ProImage,
    ProData,
    ProPrice,
    ProEdit,
} from "./CheckOutStyle";
import { Tooltip } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import styles from "./Checkout.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/dom";

////////////////////Razor pay//////////////////////
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
///////////////////////////////////////////////////

const reloadPage = () => {
    window.location.reload();
};

function CheckOutMain({ data }) {
    console.log(data);
    const [actual, setActual] = React.useState(0);
    const [saving, setSaving] = React.useState(0);
    const [offer, setOffer] = React.useState(1500);
    const [totalcheckout, setTotalCheckout] = React.useState(0);
    const [status, setStatus] = React.useState("");

    let amountRef = useRef(actual);

    const [count, setCount] = React.useState(1);
    //console.log(cartpro)
    var flag = 0;
    const handleSetActual = (val) => {
        setActual(val);
    };
    const handleSaving = (val) => {
        setSaving(val);
    };

    const handleOffer = (val) => {
        setOffer(val);
    };

    const handleTotal = (val) => {
        setTotalCheckout(val);
    };

    //////////////////////////Razorpay starts////////////////////////////////////////
    const name = "Suman";
    const email = "suman@gmail.com";
    const cartItem = [];
    // const usID = data?._id;
    const usID = 1001;

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js",
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await fetch(
            `http://localhost:3001/paid_bookings/razorpay/${offer}`,
            { method: "POST" },
        ).then((t) => t.json());

        // console.log(data)

        const options = {
            key: "rzp_test_J2k9Sh8dP5mkAX",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Payments",
            description: "Thank you for nothing. Please give us some money",
            image: "",
            handler: function (response) {
                setStatus(response.razorpay_payment_id);
                // alert(response.razorpay_order_id)
                // alert(response.razorpay_signature
            },
            prefill: {
                name,
                email,
                phone_number: "9899999999",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    useEffect(() => displayRazorpay(), []);

    ///////////////////Razorpay ends/////////////////////////
    return (
        <ProductMain>
            <PaymentDisplay>
                <Invoice>
                    <button
                        onClick={() => displayRazorpay()}
                        style={{
                            backgroundColor: "#e96a19",
                            width: "100%",
                            border: "none",
                            minHeight: "42px",
                            maxHeight: "42px",
                            color: "white",
                            fontWeight: "500",
                            marginTop: "8%",
                            textAlign: "center",
                        }}
                    >
                        PLACE ORDER
                    </button>
                </Invoice>
            </PaymentDisplay>
        </ProductMain>
    );
}

export { CheckOutMain };
