import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  select: {
    width: 400,
    height: 44,
    "& .MuiInputBase-input": {
      paddingLeft: 22,
    },
    // "&:hover .Mui-focused": {
    //   border: "1px solid #CDCDCD",
    //   borderColor: "red !important",
    // },
    // "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   border: "1px solid #CDCDCD",
    //   borderColor: "red !important",
    // },
    // "& .Mui-disabled": {
    //   color: "#FFFFFF",
    //   opacity: 0.6,
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   border: "1px solid #484850",
    //   borderColor: "red !important",
    // },
    // "&:focus-visible .MuiOutlinedInput-notchedOutline": {
    //   border: "1px solid #484850",
    //   borderColor: "red !important",
    // },
    // "& .MuiInputBase-root": {
    //   "& .MuiOutlinedInput-root": {
    //     "& .Mui-focused": {
    //       "& .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "red !important",
    //       },
    //     },
    //   },
    // },
    // "&:focus-visible .Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   border: "1px solid #484850",
    //   borderColor: "red !important",
    //   // },
    // },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "yellow",
    // },
  },
}));
export const menuProps = {
  MenuListProps: { style: { padding: 0 } },
  PaperProps: {
    style: {
      maxHeight: 140,
      maxWidth: 400,
      borderRadius: "0px 0px 8px 8px",
      marginTop: "-5px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    },
  },
};

export const selectStyle = {
  borderRadius: "8px 8px 0px 0px",
  color: "#71767A",
};

export const menuItemStyle = {
  padding: "12px 0px 0px 22px",
  minHeight: 21,
  backgroundColor: "white",
};

export const checkboxStyle = {
  width: 13,
  height: 24,
  backgroundColor: "transparent",
};

export const numberStyle = { width: 350 };
