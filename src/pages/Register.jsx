import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    emailAddress: "",
    phoneNumber: "",
    localLeague: "",
    isUnder18: false,
    hasCriminalRecord: false,
    hasMinimumPlayers: false,
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-b from-teal-500 to-[#202024] py-10">
      <div className="container mx-auto px-3">
        <div className="py-10 bg-white base-100 max-w-[700px] mx-auto rounded-lg mb-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 font-medium"
          >
            <div className="flex flex-col space-y-2 px-10">
              <label className="" htmlFor="firstName">
                First name:
              </label>
              <input
                className="input-box"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label className="" htmlFor="lastName">
                Last name:
              </label>
              <input
                className="input-box"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label className="" htmlFor="city">
                City:
              </label>
              <input
                className="input-box"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label className="" htmlFor="emailAddress">
                Email address:
              </label>
              <input
                className="input-box"
                type="text"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label className="" htmlFor="phoneNumber">
                Phone number:
              </label>
              <input
                className="input-box"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label htmlFor="localLeague">
                What league do your players compete in?
              </label>
              <input
                className="input-box"
                type="text"
                id="localLeague"
                name="localLeague"
                value={formData.localLeague}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex space-x-4 px-10">
              <label htmlFor="isUnder18">Are any players under 18?</label>
              <input
                className="checkbox checkbox-accent"
                type="checkbox"
                id="isUnder18"
                name="isUnder18"
                checked={formData.isUnder18}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex space-x-4 px-10">
              <label htmlFor="hasCriminalRecord">
                Do any players have a criminal record?
              </label>
              <input
                className="checkbox checkbox-accent"
                type="checkbox"
                id="hasCriminalRecord"
                name="hasCriminalRecord"
                checked={formData.hasCriminalRecord}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex space-x-4 px-10">
              <label htmlFor="hasMinimumPlayers">
                Do you have the minimum number of players (10)?
              </label>
              <input
                className="checkbox checkbox-accent"
                type="checkbox"
                id="hasMinimumPlayers"
                name="hasMinimumPlayers"
                checked={formData.hasMinimumPlayers}
                onChange={handleChange}
              />
            </div>

            <div className="border-0 border-t border-grey-300"></div>

            <div className="flex flex-col space-y-2 px-10">
              <label htmlFor="additionalComments">Additional comments:</label>
              <textarea
                className="input-box h-40 px-2"
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-accent mx-auto px-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
