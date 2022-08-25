# APIs Documentation

This is the official API Documentation for AncientOS Website.

## API INDEX

- user-roles (signup page).
- maintainers-forms ( new maintainer will apply this form ).
- manage-form-status (maintaier form approves to see that status).
- complete-form ( to complete the maintainer registration).
- publish-builds (to publish builds).
- publish-changelogs (to update the official source changelogs).
- publish-device ( to publish devices ).
- device-requests (maintainer request for new device ).
- publish-screenshots ( to publish screenshots ).

---

## [ Users Registration ]

- These values will be Uploaded from (Sign Up form).
- When the new user will Sign Up.

```bash
users:{ # table name

    user_id:"", # unique user-id
    user_name:"", # removed first last name, it's only name now.
    user_username:"",
    user_email:"",
    user_image:"", # profile photo Url
    user_dob:"",
    if_maintainer:"", (True/false) # if they are maintainer or not.
    if_admin:"", (True/false) # if they are admin or not.
}
```

---

### MAINATINER SECTION

## [ Manage Maintainer from ]

- These values Upload from (apply for maintainership).
- After the user completes Sign-Up and Logs-in.

```bash
maintainer_registration:{ # table name

    user_id:"", (id of user) # for collecting the rest of the user data.
    user_username:"", (username of user) # for collecting all user data.
    maintainer_form_id:"",
    maintainer_form_github:"",
    maintainer_form_sourceForge:"",
    maintainer_form_telegram:"",
    maintainer_form_xda:"",
    maintainer_form_common_tree:"",
    maintainer_form_device_tree:"",
    maintainer_form_kernal_tree:"",
    maintainer_form_vendor_tree:"",
    maintainer_form_exprience_AnyOtherRom:"",
    maintainer_form_exprience_BuildDuration:"",
    maintainer_form_exprience_PrevExp:"",
    maintainer_form_exprience_BugsFixes:"",
    maintainer_form_exprience_PatchesNeeded:"",
    maintainer_form_terms_accepted:"",(True/false)
}
```

## [ From Status ]

- These values Upload from (maintainer from status).
- After the user apply for the (apply for maintainership from).
- These variables are not final, also they can be changed later.

```bash
maintainer_status:{ # table name

   maintainer_form_id:"",
   maintainer_form_status_id:"",
   maintainer_form_status_pending:"",(True/false) # pending status true default
   maintainer_form_status_result:"", (True/false) # true="Accepted",false="Rejected",
   maintainer_form_status_result_notes:"", # performance result for congratulation

}
```

## [ Complete Form ]

- These values Upload from (Signup for maintainer form).
- After the user is accepted from (apply for maintainership from).

```bash
maintainer_form_complete:{

    user_id:"", (id of user) # for collecting the rest of the user data.
    user_username:"", (username of user) # for collecting all user data.
    maintainer_id:"", # unique maintainer id.
    device_id:"", # unique id of each device.
    device_brand:"",
    device_model:"",
    if_maintainer:"", (True/false)
    if_admin:"", (True/false)
}
```

---

## [ Publish Builds ]

- These values Upload from (Publish New build form).
- When the new build will publish by the maintainer.

```bash
build:{

    build_id:"", # unique id of each build of all devices.
    user_id:"", (id of user) # for collecting the rest of the user data.
    user_username:"", (username of user) # for collecting all user data.
    maintainer_id:"", (id of maintainer)
    maintainer_username:"", (username of maintainer)
    device_brand:"", # maintainer will select from the available brand.
    device_model:"", # maintainer will select from the available device.
    build_release_date:"", # it will be latest device update date
    build_release_version:"",# it will be latest device update version
    build_release_changelogs:"",# current changelogs of build
    direct_download_link:"", # direct download link of rom

}
```

---

## [ Publish Changelogs ]

- These values Upload from ( Add new Source Changelogs form).
- Only the admin will be able to fill this form.

```bash
source_changelogs:{
    source_change_logs_id:"", # unique id
    source_build_version:"", # build version
    source_build_android_version:"", # android version
}
```

## [ Publish Device ]

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

## [ Device Request ]

- These values Upload from (register for maintainer form).
- When the maintainer will register and didn't find the required device.
- Only the maintainer will be able to request for new Device.

```bash
device-request:{
    device_request_id:"", # unique id
    device_request_device:"",
    device_request_brand:"",

}
```

## [ Publish Screenshots ]

- These values Upload from ( Add new Screenshot form).
- Only the admin will be able to fill this form.

```bash
screenshots:{
    screenshot_id:"", # unique id
    screenshot_url:"", # unique id
    screenshot_android_version:"", # unique id
}
```
