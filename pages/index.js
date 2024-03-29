// Import statements...
import Head from "next/head";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
      phone: "",
      organization: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
      phone: Yup.string().required("Phone number is required"),
      organization: Yup.string().required("Organization name is required"),
      message: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen items-center flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex items-center  flex-col md:flex-row rounded-lg w-full md:w-1/2 font-latoRegular"
        >
          <div className="text-gray-700 p-4  md:p-8 w-full">
            <h1 className="text-3xl pb-2 font-latoBold">
              Let's get started 👋
            </h1>
            <p className="text-lg text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
             
            </p>

            {/* Name input field */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Email input field */}
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Country input field */}
            <div className="pb-4">
              <label
                htmlFor="country"
                className="block font-latoBold text-sm pb-2"
              >
                Country
              </label>
              <select
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>

            {/* Terms of service */}
            <div className="pb-4">
              <label
                htmlFor="terms"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.terms && formik.errors.terms
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms of service"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-5 w-5 text-teal-500 border-2 background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>

            {/* Phone number input field */}
            <div className="pb-4">
              <label
                htmlFor="phone"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.phone && formik.errors.phone
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : "Phone Number"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Organization/Company name input field */}
            <div className="pb-4">
              <label
                htmlFor="organization"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.organization && formik.errors.organization
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.organization && formik.errors.organization
                  ? formik.errors.organization
                  : "Organization/Company Name"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="organization"
                placeholder="Enter your organization/company name"
                onChange={formik.handleChange}
                value={formik.values.organization}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Message/Comment input field */}
            <div className="pb-4">
              <label
                htmlFor="message"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.message && formik.errors.message
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Message/Comments"}
              </label>
              <textarea
                className="border-2 border-gray-500 p-2 rounded-md w-full md:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                name="message"
                placeholder="Enter your message or comments"
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>

          <div className="relative flex-1 hidden md:block">
            <Image
              className="object-cover rounded-lg w-full"
              fill
              priority
              // src="https://media.licdn.com/dms/image/C4E0BAQEbU_DCxBNjkA/company-logo_200_200/0/1630602274490/abstractdigitalworld_logo?e=1715212800&v=beta&t=vF0x9S__DciVcjEuH51HUdSzn_7KpLnJrGtc3DWFNrE"
              alt="form-learn"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
