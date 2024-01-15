import axios from "axios";
import { toast } from "react-toastify";
const API_URL =
  "https://api.shopimix.com/api/general";
const AUTH =
  "https://api.shopimix.com/api/dashboard/token";

const CreateRequest = (procName, params, API, tablesNames, isFormData) => {
  return new Promise((resolve, reject) => {
    const requestConfig = {
      headers: {},
    };
    if (!procName.includes("Unauthorized")) {
      requestConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }

    axios.post(
      API || API_URL,
      isFormData
        ? params
        : {
          ConnectionStringName: "Masajed",
          StoredProcedureName: procName,
          SpParams: params,
          TablesNames: tablesNames,
        },
      requestConfig
    )
      .then((response) => resolve(response))
      .catch((error) => {
        console.log(error);
        if (
          error.response?.data["error-message"] == "30" ||
          error.response?.data["error-message"] == "20"
        ) {
          localStorage.clear();
          window.location.reload();
        }
        toast.error(error.response?.data?.Message || error);
        reject(error);
      });
  });
};






export const Login = (params) => {
  return CreateRequest(
    "web.Login",
    {
      ...params,
    },
    AUTH
  );
};

export const SignUp = (params) => {
  return CreateRequest(
    "Unauthorized.SignUp",
    {
      ...params,
    },
    AUTH
  );
};

export const InsertVolunteeringRequest = (params) => {
  return CreateRequest(
    "Unauthorized.InsertVolunteeringRequest",
    {
      ...params,
    }
  );
};


export const GenerateOTP = (params) => {
  return CreateRequest(
    "Unauthorized.GenerateOTP",
    {
      ...params,
    }
  );
};

export const CheckOTP = (params) => {
  return CreateRequest(
    "Unauthorized.CheckOTP",
    {
      ...params,
    }
  );
};

export const ChangePassword = (params) => {
  return CreateRequest(
    "Unauthorized.ChangePassword", {
    ...params,
  }
  );
};

export const GetMasajedLibrary = (params) => {
  return CreateRequest(
    "Unauthorized.GetMasajedLibrary", {
    ...params,
  }
  );
};

// export const UploadFile = (formData) => {
//   return CreateRequest(null,

//     formData,

//     UPLOAD_EXCEL_FILE, null, true
//   );
// };
// export const UploadFileOneToOne = (formData) => {
//   return CreateRequest(null,

//     formData,

//     UPLOAD_EXCEL_OneToOne, null, true
//   );
// };
// export const GetUser = (params) => {
//   return CreateRequest("[dbo].GetUser", {
//     ...params,
//   });
// };