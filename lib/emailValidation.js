export const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const indianStates = [
    {
        "key": "AN",
        "text": "Andaman and Nicobar Islands"
    },
    {
        "key": "AP",
        "text": "Andhra Pradesh"
    },
    {
        "key": "AR",
        "text": "Arunachal Pradesh"
    },
    {
        "key": "AS",
        "text": "Assam"
    },
    {
        "key": "BR",
        "text": "Bihar"
    },
    {
        "key": "CG",
        "text": "Chandigarh"
    },
    {
        "key": "CH",
        "text": "Chhattisgarh"
    },
    {
        "key": "DH",
        "text": "Dadra and Nagar Haveli"
    },
    {
        "key": "DD",
        "text": "Daman and Diu"
    },
    {
        "key": "DL",
        "text": "Delhi"
    },
    {
        "key": "GA",
        "text": "Goa"
    },
    {
        "key": "GJ",
        "text": "Gujarat"
    },
    {
        "key": "HR",
        "text": "Haryana"
    },
    {
        "key": "HP",
        "text": "Himachal Pradesh"
    },
    {
        "key": "JK",
        "text": "Jammu and Kashmir"
    },
    {
        "key": "JH",
        "text": "Jharkhand"
    },
    {
        "key": "KA",
        "text": "Karnataka"
    },
    {
        "key": "KL",
        "text": "Kerala"
    },
    {
        "key": "LD",
        "text": "Lakshadweep"
    },
    {
        "key": "MP",
        "text": "Madhya Pradesh"
    },
    {
        "key": "MH",
        "text": "Maharashtra"
    },
    {
        "key": "MN",
        "text": "Manipur"
    },
    {
        "key": "ML",
        "text": "Meghalaya"
    },
    {
        "key": "MZ",
        "text": "Mizoram"
    },
    {
        "key": "NL",
        "text": "Nagaland"
    },
    {
        "key": "OR",
        "text": "Odisha"
    },
    {
        "key": "PY",
        "text": "Puducherry"
    },
    {
        "key": "PB",
        "text": "Punjab"
    },
    {
        "key": "RJ",
        "text": "Rajasthan"
    },
    {
        "key": "SK",
        "text": "Sikkim"
    },
    {
        "key": "TN",
        "text": "Tamil Nadu"
    },
    {
        "key": "TS",
        "text": "Telangana"
    },
    {
        "key": "TR",
        "text": "Tripura"
    },
    {
        "key": "UP",
        "text": "Uttar Pradesh"
    },
    {
        "key": "UK",
        "text": "Uttarakhand"
    },
    {
        "key": "WB",
        "text": "West Bengal"
    }
]

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
