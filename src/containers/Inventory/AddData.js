
import React from "react";

const AddData = () => {
    return (
        <form class="ui form segment">
  <div class="two fields">
    <div class="field">
      <label>Title</label>
      <input placeholder="Product title" name="name" type="text"/>
    </div>
    <div class="field">
      <label>Gender</label>
      <div class="ui selection dropdown">
        <input name="gender" type="hidden"/>
        <div class="default text">Gender</div>
        <i class="dropdown icon"></i>
        <div class="menu dropdown">
          <div class="item" data-value="male">Male</div>
          <div class="item" data-value="female">Female</div>
        </div>
      </div>
    </div>
  </div>
  <div class="field">
    <label>Username</label>
    <input placeholder="Username" name="username" type="text"/>
  </div>
  <div class="field">
    <label>Password</label>
    <input name="password" type="password"/>
  </div>
  <div class="inline field">
    <div class="ui checkbox">
      <input name="terms" type="checkbox"/>
      <label>I agree to the terms and conditions</label>
    </div>
  </div>
  <div class="ui primary submit button">Submit</div>
  <div class="ui reset button">Reset</div>
  <div class="ui clear button">Clear</div>
</form>
  );
};

export default AddData;
