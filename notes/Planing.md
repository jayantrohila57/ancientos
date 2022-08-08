# APIs Documentation

This is the official API Documentation for AncientOS Website.

## Notes

- All (xxxx_id) will be auto-generated from the fill-up form.
- Need to make all variables. We might not need it at this time but it's to make the process easy.

## 1) API for Users Registration

- These values will be Uploaded from (Sign Up form).
- When the new user will Sign Up.

```bash
users:{
    user_id:"", # unique user-id
    user_name:"",
    user_username:"",
    user_email:"",
    user_image:"", # profile photo
    user_dob:"",

    if_maintainer:"", (True/false) # if they are maintainer or not.
    if_admin:"", (True/false) # if they are admin or not.
}
```

## 2) API for Maintainer Registration

- These values Upload from (Signup for maintainer form).
- After the user is accepted from (apply for maintainership from).

```bash
maintainer:{
    maintainer_id:"", # unique maintainer id.
    user_id:"", (id of user) # for collecting the rest of the user data.
    user_username:"", (username of user) # for collecting all user data.

    device_id:"", # unique id of each device.
    device_brand:"",
    device_model:"",

    if_maintainer:"", (True/false)
    if_admin:"", (True/false)
}
```

## 3) API for Apply for Maintainer from

- These values Upload from (apply for maintainership).
- After the user completes Sign-Up and Login.

```bash
maintainer:{
   ...# this is (apply for maintainer form) and all variables will be changed later...
   ...# all variables will rename later...
}
```

## 4) API for Maintainer from the status

- These values Upload from (maintainer from status).
- After the user apply for the (apply for maintainership from).
- These variables are not final, also they can be changed later.

```bash
maintainer:{
   maintainer_form_status_id:"",
   maintainer_form_status_pending:"",(True/false) # pending status true default
   maintainer_form_status_result:"", (True/false) # true="Accepted", false="Rejected", default="null"
   maintainer_form_status_result_notes:"", # performance result for congratulation

}
```

## 5) API for New Build Registration

- These values Upload from (Publish New build form).
- When the new build will publish by the maintainer.

```bash
build:{
    build_id:"", # unique id of each build of all devices.

    device_brand:"", # maintainer will select from the available brand.
    device_model:"", # maintainer will select from the available device.

    build_release_date:"", # it will be latest device update date
    build_release_version:"",# it will be latest device update version
    build_release_changelogs:"",# current changelogs of build

    user_id:"", (id of user) # for collecting the rest of the user data.
    user_username:"", (username of user) # for collecting all user data.
    maintainer_id:"", (id of maintainer)
    maintainer_username:"", (username of maintainer)
    direct_download_link:"", # direct download link of rom

}
```

## 6) API for New Device Registration

- These values Upload from (Publish New device form).
- Only Admin will be able to publish the new Device.

```bash
device:{
    device_id:"", # unique id of each device.

    device_brand:"",
    device_model:"", # Device name only.
    device_code_name:"", # device Code name only.
    device_image_url:"", # device image URL
    default_download_link:"",

    build_id:"", # no maintainer name we will fetch it from build
    build_release_date:"", # import from build

    rom_support_channel:"", # main ancient channel
    official_rom_group:"", # main ancient channel
    device_support_group:"", # maintainer telegram group

    device_xda_thread:"",

    device_flash_instruction:"",
}
```

## 7) API for Request for Add a New Device

- These values Upload from (Signup for maintainer form).
- When the maintainer will register and didn't find the required device.
- Only the maintainer will be able to request for new Device.

```bash
source_changelogs:{
    source_change_logs_id:"", # unique id
    source_build_version:"", # build version
    source_build_android_version:"", # android version
}
```

## 8) API for Source Changelogs

- These values Upload from ( Add new Source Changelogs form).
- Only the admin will be able to fill this form.

```bash
source_changelogs:{
    source_change_logs_id:"", # unique id
    source_build_version:"", # build version
    source_build_android_version:"", # android version
}
```

## 9) API for Screenshots

- These values Upload from ( Add new Screenshot form).
- Only the admin will be able to fill this form.

```bash
screenshots:{
    screenshot_id:"", # unique id
    screenshot_url:"", # unique id
    screenshot_android_version:"", # unique id
}
```

## 10) API for Donate Screenshots

- This isn't required now and will be implemented later.
- No need to work on it, it's just for reference.

```bash
screenshots:{

    screenshot_id:"", # unique id
    screenshot_url:"", # unique id
    screenshot_android_version:"", # unique id
    screenshot_submit_by:"", # unique id
}
```
