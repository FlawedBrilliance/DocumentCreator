


//Order Table

var section = '10/orders' ;

$TableCtr=0 ;
$("#addrow_order").click(function()
{
	
	$TableCtr++;


	rowString = `
<table class="ui celled table black unstackable" >
				
						<thead>

			              	  <th colspan="2">Test</th>
				              <th colspan="3">Expected Results</th>
				              <th colspan="6">Test Results</th>
			              	

						</thead>

		<tbody>



	<tr>
              <th class="one wide"><center>Order Status</center></th>
              <th class="two wide"><center>HIS Test Steps</center></th>
              <th class="two wide"><center>ISCV IBE</center></th>
              <th class="two wide"><center>ISCV</center></th>
              <th class="two wide"><center>DICOM Modality Worklist <br>
              (DWML)</center></th>
              <th class="one wide"><center>Test Date</center></th>
              <th class="one wide"><center>Pass/fail</center></th>
              <th class="one wide"><center>Expected Result</center></th>
              <th class="one wide"><center>Actual Result</center></th>
              <th class="two wide"><center>comments</center></th>
              <th class="one wide"><center>sign_off</center></th>
            </tr>
            <tr>
<td colspan="11"><b>New Order</b></td>
            </tr>
            <tr>
              <td><center>
                ORM_NW <br>
                New Order </center>
              </td>
              <td>
                <center>
                  Create a new order for an ISCV procedure scheduled for today
</center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error
                </center>
              </td>
              <td>
                <center>
                  1. Verify a new patient folder was created in ISCV <br>

                  2. Order in ISCV worklist under the new patient folder<br>

                  3. Verify all expected fields are populated
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`1" name="test_details`+$TableCtr+`1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`1" name="pass_fail`+$TableCtr+`1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`1" name="expected_result`+$TableCtr+`1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`1" name="actual_result`+$TableCtr+`1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`1" name="comments`+$TableCtr+`1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`1" name="sign_off`+$TableCtr+`1" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
               Future Order
              </center>
              </td>
              <td>
                <center>
                  Create future order in for an ISCV procedure scheduled for tomorrow
</center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error. The order posts in database and is forwarded to ISCV on scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on ISCV on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`2" name="test_details`+$TableCtr+`2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`2" name="pass_fail`+$TableCtr+`2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`2" name="expected_result`+$TableCtr+`2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`2" name="actual_result`+$TableCtr+`2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`2" name="comments`+$TableCtr+`2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`2" name="sign_off`+$TableCtr+`2" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                Repeat Orders
                </center>
              </td>
              <td>
                <center>
                  Create order for patient with existing order in ISCV
</center>
              </td>
              <td>
                <center>
                  All ORM_NW messages were received processed without error
                </center>
              </td>
              <td>
                <center>
                  Multiple orders seen in ISCV worklist
                </center>
              </td>
              <td>
                <center>
                  Multiple orders on the DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`3" name="test_details`+$TableCtr+`3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`3" name="pass_fail`+$TableCtr+`3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`3" name="expected_result`+$TableCtr+`3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`3" name="actual_result`+$TableCtr+`3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`3" name="comments`+$TableCtr+`3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`3" name="sign_off`+$TableCtr+`3" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
               Recurring Order
</center>
              </td>
              <td>
                <center>
                  Create recurring order scheduled for today and tomorrow
</center>
              </td>
              <td>
                <center>
                  Verify that the ORM_NW was received by the XcC and multiple Orders were generated for the specified times.
                </center>
              </td>
              <td>
                <center>
                  Each order seen on ISCV worklist on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Each order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`4" name="test_details`+$TableCtr+`4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`4" name="pass_fail`+$TableCtr+`4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`4" name="expected_result`+$TableCtr+`4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`4" name="actual_result`+$TableCtr+`4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`4" name="comments`+$TableCtr+`4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`4" name="sign_off`+$TableCtr+`4" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                 Non-Cardiology Order
</center>
              </td>
              <td>
                <center>
                  Order Non-Cardiology Order in scheduled for today
</center>
              </td>
              <td>
                <center>
                  Scenario 1 - HIS filtering - Messsage not received <br>

Scenario 2 - IBE filtering - Message received but not forwarded to ISCV or worklist

                </center>
              </td>
              <td>
                <center>
                  Order not seen in ISCV
                </center>
              </td>
              <td>
                <center>
                  Order not on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`5" name="test_details`+$TableCtr+`5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`5" name="pass_fail`+$TableCtr+`5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`5" name="expected_result`+$TableCtr+`5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`5" name="actual_result`+$TableCtr+`5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`5" name="comments`+$TableCtr+`5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`5" name="sign_off`+$TableCtr+`5" />
                </div>
              </td>
            </tr>

				

		<tr>
			<td colspan="11"><b>Order Cancel
			</b></td>
			</tr>
			<tr>
			<td><center>
			  ORM_CA <br>
			Cancel Order
			</center>
			</td>
			<td>
			  <center>
			    Cancel an existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`6" name="test_details`+$TableCtr+`6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`6" name="pass_fail`+$TableCtr+`6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`6" name="expected_result`+$TableCtr+`6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`6" name="actual_result`+$TableCtr+`6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`6" name="comments`+$TableCtr+`6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`6" name="sign_off`+$TableCtr+`6" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OC <br>
			Cancel Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel an existing ISCV order
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`7" name="test_details`+$TableCtr+`7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`7" name="pass_fail`+$TableCtr+`7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`7" name="expected_result`+$TableCtr+`7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`7" name="actual_result`+$TableCtr+`7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`7" name="comments`+$TableCtr+`7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`7" name="sign_off`+$TableCtr+`7" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_DC <br>
			Discontinue Order

			  </center>
			</td>
			<td>
			  <center>
			    Discontinue an existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`8" name="test_details`+$TableCtr+`8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`8" name="pass_fail`+$TableCtr+`8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`8" name="expected_result`+$TableCtr+`8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`8" name="actual_result`+$TableCtr+`8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`8" name="comments`+$TableCtr+`8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`8" name="sign_off`+$TableCtr+`8" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OD <br>
			Discontinue Order

			</center>
			</td>
			<td>
			  <center>
			    Discontinue an existing ISCV order
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`9" name="test_details`+$TableCtr+`9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`9" name="pass_fail`+$TableCtr+`9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`9" name="expected_result`+$TableCtr+`9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`9" name="actual_result`+$TableCtr+`9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`9" name="comments`+$TableCtr+`9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`9" name="sign_off`+$TableCtr+`9" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`10" name="test_details`+$TableCtr+`10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`10" name="pass_fail`+$TableCtr+`10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`10" name="expected_result`+$TableCtr+`10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`10" name="actual_result`+$TableCtr+`10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`10" name="comments`+$TableCtr+`10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`10" name="sign_off`+$TableCtr+`10" />
			  </div>
			</td>
			</tr>


			<tr>
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`11" name="test_details`+$TableCtr+`11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`11" name="pass_fail`+$TableCtr+`11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`11" name="expected_result`+$TableCtr+`11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`11" name="actual_result`+$TableCtr+`11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`11" name="comments`+$TableCtr+`11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`11" name="sign_off`+$TableCtr+`11" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`12" name="test_details`+$TableCtr+`12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`12" name="pass_fail`+$TableCtr+`12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`12" name="expected_result`+$TableCtr+`12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`12" name="actual_result`+$TableCtr+`12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`12" name="comments`+$TableCtr+`12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`12" name="sign_off`+$TableCtr+`12" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_OC   <br>
			Cancel Future Order


			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`13" name="test_details`+$TableCtr+`13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`13" name="pass_fail`+$TableCtr+`13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`13" name="expected_result`+$TableCtr+`13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`13" name="actual_result`+$TableCtr+`13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`13" name="comments`+$TableCtr+`13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`13" name="sign_off`+$TableCtr+`13" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_DC  <br>
			Discontinue Future Order


			</center>
			</td>
			<td>
			  <center>
			    Discontinue future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date

			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date

			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`14" name="test_details`+$TableCtr+`14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`14" name="pass_fail`+$TableCtr+`14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`14" name="expected_result`+$TableCtr+`14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`14" name="actual_result`+$TableCtr+`14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`14" name="comments`+$TableCtr+`14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`14" name="sign_off`+$TableCtr+`14" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OD   <br>
			Discontinue Future Order



			</center>
			</td>
			<td>
			  <center>
			    Discontinue future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date

			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date

			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`15" name="test_details`+$TableCtr+`15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`15" name="pass_fail`+$TableCtr+`15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`15" name="expected_result`+$TableCtr+`15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`15" name="actual_result`+$TableCtr+`15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`15" name="comments`+$TableCtr+`15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`15" name="sign_off`+$TableCtr+`15" />
			  </div>
			</td>
			</tr>

			<!------->

			<tr>
			<td colspan="11"><b>Status Change
			</b></td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_SC <br>
			Procedure Change

			</center>
			</td>
			<td>
			  <center>
			    Change procedure of an existing ISCV order


			</center>
			</td>
			<td>
			  <center>
			    Procedure updated

			  </center>
			</td>
			<td>
			  <center>
			    New study type seen in ISCV worklist


			  </center>
			</td>
			<td>
			  <center>
			    New procedure seen on modality DWML (if modality capable of displaying)
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`16" name="test_details`+$TableCtr+`16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`16" name="pass_fail`+$TableCtr+`16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`16" name="expected_result`+$TableCtr+`16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`16" name="actual_result`+$TableCtr+`16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`16" name="comments`+$TableCtr+`16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`16" name="sign_off`+$TableCtr+`16" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_SC  <br>
			Scheduled Date Change
			</center>
			</td>
			<td>
			  <center>
			    Change the order date of existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Scheduled date updated

			</center>
			</td>
			<td>
			  <center>
			    Existing order still seen in ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order seen on DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`17" name="test_details`+$TableCtr+`17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`17" name="pass_fail`+$TableCtr+`17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`17" name="expected_result`+$TableCtr+`17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`17" name="actual_result`+$TableCtr+`17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`17" name="comments`+$TableCtr+`17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`17" name="sign_off`+$TableCtr+`17" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_SC_IP  <br>
			Status Update to In Progress
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to in progress
			</center>
			</td>
			<td>
			  <center>
			    Status changed to In Progress

			  </center>
			</td>
			<td>
			  <center>
			    Existing order still seen in ISCV worklist
			</center>
			</td>
			<td>
			  <center>
			    Existing order still seen on DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`18" name="test_details`+$TableCtr+`18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`18" name="pass_fail`+$TableCtr+`18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`18" name="expected_result`+$TableCtr+`18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`18" name="actual_result`+$TableCtr+`18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`18" name="comments`+$TableCtr+`18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`18" name="sign_off`+$TableCtr+`18" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_CA  <br>
			Status Update to Cancel
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to Cancel
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`19" name="test_details`+$TableCtr+`19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`19" name="pass_fail`+$TableCtr+`19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`19" name="expected_result`+$TableCtr+`19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`19" name="actual_result`+$TableCtr+`19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`19" name="comments`+$TableCtr+`19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`19" name="sign_off`+$TableCtr+`19" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_DC
			Status Update to Discontinue <br>
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to Discontinue
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`20" name="test_details`+$TableCtr+`20" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`20" name="pass_fail`+$TableCtr+`20 />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`20" name="expected_result`+$TableCtr+`20 />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`20" name="actual_result`+$TableCtr+`20 />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`20" name="comments`+$TableCtr+`20" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`20" name="sign_off`+$TableCtr+`20" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_CM   <br>
			Status Update to Complete
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to complete
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Completed
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details`+$TableCtr+`21" name="test_details`+$TableCtr+`21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="pass_fail`+$TableCtr+`21" name="pass_fail`+$TableCtr+`21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="expected_result`+$TableCtr+`21" name="expected_result`+$TableCtr+`21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result`+$TableCtr+`21" name="actual_result`+$TableCtr+`21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="comments`+$TableCtr+`21" name="comments`+$TableCtr+`21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="sign_off`+$TableCtr+`21" name="sign_off`+$TableCtr+`21" />
			  </div>
			</td>

		</tbody>
	</table>

		`

	$('#orderTable').append(rowString);
	$('#TableCtr').val($TableCtr);
	$('.editField').prop('readOnly', false);
	
});




var url = apiUrl+'/section10/orders/fetch_neworder.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_orders,function(key,neworderData)
        {
                rowString = `
      <table class="ui celled table black unstackable" >
        
            <thead>

                        <th colspan="2">Test</th>
                      <th colspan="3">Expected Results</th>
                      <th colspan="6">Test Results</th>
                      

            </thead>

    <tbody>



  <tr>
              <th class="one wide"><center>Order Status</center></th>
              <th class="two wide"><center>HIS Test Steps</center></th>
              <th class="two wide"><center>ISCV IBE</center></th>
              <th class="two wide"><center>ISCV</center></th>
              <th class="two wide"><center>DICOM Modality Worklist <br>
              (DWML)</center></th>
              <th class="one wide"><center>Test Date</center></th>
              <th class="one wide"><center>Pass/fail</center></th>
              <th class="one wide"><center>Expected Result</center></th>
              <th class="one wide"><center>Actual Result</center></th>
              <th class="two wide"><center>comments</center></th>
              <th class="one wide"><center>sign_off</center></th>
            </tr>
            <tr>
<td colspan="11"><b>New Order</b></td>
            </tr>
            <tr>
              <td><center>
                ORM_NW <br>
                New Order </center>
              </td>
              <td>
                <center>
                  Create a new order for an ISCV procedure scheduled for today
                </center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error
                </center>
              </td>
              <td>
                <center>
                  1. Verify a new patient folder was created in ISCV <br>

                  2. Order in ISCV worklist under the new patient folder<br>

                  3. Verify all expected fields are populated
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`1" name="test_details`+$TableCtr+`1" value="`+neworderData.orm_new_test_date+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`1" name="pass_fail`+$TableCtr+`1" value="`+neworderData.orm_new_pass_fail+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`1" name="expected_result`+$TableCtr+`1" value="`+neworderData.orm_new_expected_value+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`1" name="actual_result`+$TableCtr+`1" value="`+neworderData.orm_new_actual_value+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`1" name="comments`+$TableCtr+`1" value="`+neworderData.orm_new_comments+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`1" name="sign_off`+$TableCtr+`1" value="`+neworderData.orm_new_signoff+`" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
               Future Order
              </center>
              </td>
              <td>
                <center>
                  Create future order in for an ISCV procedure scheduled for tomorrow
</center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error. The order posts in database and is forwarded to ISCV on scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on ISCV on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`2" name="test_details`+$TableCtr+`2" value="`+neworderData.orm_future_test_date+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`2" name="pass_fail`+$TableCtr+`2" value="`+neworderData.orm_future_pass_fail+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`2" name="expected_result`+$TableCtr+`2" value="`+neworderData.orm_future_expected_vlaue+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`2" name="actual_result`+$TableCtr+`2" value="`+neworderData.orm_future_actual_value+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`2" name="comments`+$TableCtr+`2" value="`+neworderData.orm_future_comments+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`2" name="sign_off`+$TableCtr+`2" value="`+neworderData.orm_future_signoff+`" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                Repeat Orders
                </center>
              </td>
              <td>
                <center>
                  Create order for patient with existing order in ISCV
</center>
              </td>
              <td>
                <center>
                  All ORM_NW messages were received processed without error
                </center>
              </td>
              <td>
                <center>
                  Multiple orders seen in ISCV worklist
                </center>
              </td>
              <td>
                <center>
                  Multiple orders on the DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`3" name="test_details`+$TableCtr+`3" value="`+neworderData.orm_repeat_test_date+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`3" name="pass_fail`+$TableCtr+`3" value="`+neworderData.orm_repeat_pass_fail+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`3" name="expected_result`+$TableCtr+`3" value="`+neworderData.orm_repeat_expected_value+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`3" name="actual_result`+$TableCtr+`3" value="`+neworderData.orm_repeat_actual_value+`" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`3" name="comments`+$TableCtr+`3" value="`+neworderData.orm_repeat_comments+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`3" name="sign_off`+$TableCtr+`3" value="`+neworderData.orm_repeat_signoff+`"/>
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
               Recurring Order
</center>
              </td>
              <td>
                <center>
                  Create recurring order scheduled for today and tomorrow
</center>
              </td>
              <td>
                <center>
                  Verify that the ORM_NW was received by the XcC and multiple Orders were generated for the specified times.
                </center>
              </td>
              <td>
                <center>
                  Each order seen on ISCV worklist on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Each order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`4" name="test_details`+$TableCtr+`4" value="`+neworderData.orm_recr_test_date+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`4" name="pass_fail`+$TableCtr+`4" value="`+neworderData.orm_recr_pass_fail+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`4" name="expected_result`+$TableCtr+`4" value="`+neworderData.orm_recr_expected_value+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`4" name="actual_result`+$TableCtr+`4" value="`+neworderData.orm_recr_actual_value+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`4" name="comments`+$TableCtr+`4" value="`+neworderData.orm_recr_comments+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`4" name="sign_off`+$TableCtr+`4" value="`+neworderData.orm_recr_signoff+`"/>
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                 Non-Cardiology Order
</center>
              </td>
              <td>
                <center>
                  Order Non-Cardiology Order in scheduled for today
</center>
              </td>
              <td>
                <center>
                  Scenario 1 - HIS filtering - Messsage not received <br>

Scenario 2 - IBE filtering - Message received but not forwarded to ISCV or worklist

                </center>
              </td>
              <td>
                <center>
                  Order not seen in ISCV
                </center>
              </td>
              <td>
                <center>
                  Order not on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details`+$TableCtr+`5" name="test_details`+$TableCtr+`5" value="`+neworderData.orm_noncardio_test_date+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="pass_fail`+$TableCtr+`5" name="pass_fail`+$TableCtr+`5" value="`+neworderData.orm_noncardio_pass_fail+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="expected_result`+$TableCtr+`5" name="expected_result`+$TableCtr+`5" value="`+neworderData.orm_noncardio_expected_value+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result`+$TableCtr+`5" name="actual_result`+$TableCtr+`5" value="`+neworderData.orm_noncardio_actual_value+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="comments`+$TableCtr+`5" name="comments`+$TableCtr+`5" value="`+neworderData.orm_noncardio_comments+`"/>
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="sign_off`+$TableCtr+`5" name="sign_off`+$TableCtr+`5" value="`+neworderData.orm_noncardio_signoff+`"/>
                </div>
              </td>
            </tr>
              
                ` ;


                $('#orderTable tbody:last').before(rowString);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});




var url1 = apiUrl+'/section10/orders/fetch_cancelorder.php?prs=' + prs + '&token=' + token;
$.getJSON(url1,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_cancel_orders,function(key,canorderData)
        {
                rowString1 = `
      <tr>
      <td colspan="11"><b>Order Cancel
      </b></td>
      </tr>
      <tr>
      <td><center>
        ORM_CA <br>
      Cancel Order
      </center>
      </td>
      <td>
        <center>
          Cancel an existing ISCV order

      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
        </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist

        </center>
      </td>
      <td>
        <center>
          Order removed from modality DWML
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`6" name="test_details`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`6" name="pass_fail`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`6" name="expected_result`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`6" name="actual_result`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`6" name="comments`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`6" name="sign_off`+$TableCtr+`6" value="`+canorderData.orm_ca_cancel_signoff+`"/>
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_OC <br>
      Cancel Order

      </center>
      </td>
      <td>
        <center>
          Cancel an existing ISCV order
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist

        </center>
      </td>
      <td>
        <center>
          Order removed from modality DWML
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`7" name="test_details`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`7" name="pass_fail`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`7" name="expected_result`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`7" name="actual_result`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`7" name="comments`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`7" name="sign_off`+$TableCtr+`7" value="`+canorderData.orm_oc_cancel_signoff+`"/>
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_DC <br>
      Discontinue Order

        </center>
      </td>
      <td>
        <center>
          Discontinue an existing ISCV order

      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
        </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist

        </center>
      </td>
      <td>
        <center>
          Order removed from modality DWML
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`8" name="test_details`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`8" name="pass_fail`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`8" name="expected_result`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_expected_vlaue+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`8" name="actual_result`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`8" name="comments`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`8" name="sign_off`+$TableCtr+`8" value="`+canorderData.orm_dc_discontinue_signoff+`"/>
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_OD <br>
      Discontinue Order

      </center>
      </td>
      <td>
        <center>
          Discontinue an existing ISCV order
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
        </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist
        </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`9" name="test_details`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`9" name="pass_fail`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`9" name="expected_result`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`9" name="actual_result`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`9" name="comments`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`9" name="sign_off`+$TableCtr+`9" value="`+canorderData.orm_od_discontinue_signoff+`"/>
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_CA <br>
      Cancel Future Order

      </center>
      </td>
      <td>
        <center>
          Cancel future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`10" name="test_details`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`10" name="pass_fail`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`10" name="expected_result`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`10" name="actual_result`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`10" name="comments`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`10" name="sign_off`+$TableCtr+`10" value="`+canorderData.orm_ca_future_cancel_signoff+`"/>
        </div>
      </td>
      </tr>


      <tr>
      <td><center>
        ORM_CA <br>
      Cancel Future Order

      </center>
      </td>
      <td>
        <center>
          Cancel future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`11" name="test_details`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`11" name="pass_fail`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`11" name="expected_result`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`11" name="actual_result`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`11" name="comments`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`11" name="sign_off`+$TableCtr+`11" value="`+canorderData.orm_oc_future_cancel_signoff+`"/>
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_CA <br>
      Cancel Future Order

      </center>
      </td>
      <td>
        <center>
          Cancel future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`12" name="test_details`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`12" name="pass_fail`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`12" name="expected_result`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`12" name="actual_result`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`12" name="comments`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`12" name="sign_off`+$TableCtr+`12" value="`+canorderData.orm_dc_disc_future_signoff+`"/>
        </div>
      </td>
      </tr>
      <tr>
      <td><center>
        ORM_OC   <br>
      Cancel Future Order


      </center>
      </td>
      <td>
        <center>
          Cancel future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`13" name="test_details`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_test_date+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`13" name="pass_fail`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_pass_fail+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`13" name="expected_result`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_expected_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`13" name="actual_result`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_actual_value+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`13" name="comments`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_comments+`"/>
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`13" name="sign_off`+$TableCtr+`13" value="`+canorderData.orm_od_disc_future_signoff+`"/>
        </div>
      </td>
      </tr>
      `;


                $('#orderTable tbody:last').before(rowString1);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});




var url2 = apiUrl+'/section10/orders/fetch_status.php?prs=' + prs + '&token=' + token;
$.getJSON(url2,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_order_status,function(key,statorderData)
        {
                rowString2 = `
    <tr>
      <td><center>
        ORM_DC  <br>
      Discontinue Future Order


      </center>
      </td>
      <td>
        <center>
          Discontinue future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date

        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date

        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`14" name="test_details`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`14" name="pass_fail`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`14" name="expected_result`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_expected_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`14" name="actual_result`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`14" name="comments`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`14" name="sign_off`+$TableCtr+`14" value="`+statorderData.orm_sc_pc_signoff+`" />
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_OD   <br>
      Discontinue Future Order



      </center>
      </td>
      <td>
        <center>
          Discontinue future order not yet seen in ISCV
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date

        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date

        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`15" name="test_details`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`15" name="expected_result`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`15" name="expected_result`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_expected_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`15" name="actual_result`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`15" name="comments`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`15" name="sign_off`+$TableCtr+`15" value="`+statorderData.orm_sc_sdc_signoff+`" />
        </div>
      </td>
      </tr>

      <!------->

      <tr>
      <td colspan="11"><b>Status Change
      </b></td>
      </tr>
      <tr>
      <td><center>
        ORM_SC_SC <br>
      Procedure Change

      </center>
      </td>
      <td>
        <center>
          Change procedure of an existing ISCV order


      </center>
      </td>
      <td>
        <center>
          Procedure updated

        </center>
      </td>
      <td>
        <center>
          New study type seen in ISCV worklist


        </center>
      </td>
      <td>
        <center>
          New procedure seen on modality DWML (if modality capable of displaying)
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`16" name="test_details`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`16" name="pass_fail`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`16" name="expected_result`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_expected_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`16" name="actual_result`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`16" name="comments`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`16" name="sign_off`+$TableCtr+`16" value="`+statorderData.orm_sc_ip_signoff+`" />
        </div>
      </td>
      </tr>
      <tr>
      <td><center>
        ORM_SC_SC  <br>
      Scheduled Date Change
      </center>
      </td>
      <td>
        <center>
          Change the order date of existing ISCV order

      </center>
      </td>
      <td>
        <center>
          Scheduled date updated

      </center>
      </td>
      <td>
        <center>
          Existing order still seen in ISCV worklist
        </center>
      </td>
      <td>
        <center>
          Order seen on DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`17" name="test_details`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`17" name="pass_fail`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`17" name="expected_result`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_expected_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`17" name="actual_result`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`17" name="comments`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`17" name="sign_off`+$TableCtr+`17" value="`+statorderData.orm_sc_ca_signoff+`" />
        </div>
      </td>
      </tr>

      <tr>
      <td><center>
        ORM_SC_IP  <br>
      Status Update to In Progress
      </center>
      </td>
      <td>
        <center>
          Change the status existing ISCV order to in progress
      </center>
      </td>
      <td>
        <center>
          Status changed to In Progress

        </center>
      </td>
      <td>
        <center>
          Existing order still seen in ISCV worklist
      </center>
      </td>
      <td>
        <center>
          Existing order still seen on DWML
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`18" name="test_details`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`18" name="pass_fail`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`18" name="expected_result`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_expected_vlaue+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`18" name="actual_result`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`18" name="comments`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`18" name="sign_off`+$TableCtr+`18" value="`+statorderData.orm_sc_dc_cancel_signoff+`" />
        </div>
      </td>
      </tr>
      <tr>
      <td><center>
        ORM_SC_CA  <br>
      Status Update to Cancel
      </center>
      </td>
      <td>
        <center>
          Change the status existing ISCV order to Cancel
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
        </center>
      </td>
      <td>
        <center>
          Order removed from ISCV worklist
        </center>
      </td>
      <td>
        <center>
          Order removed from modality DWML
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`19" name="test_details`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_test_date+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`19" name="pass_fail`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`19" name="expected_result`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_expected_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`19" name="actual_result`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_actual_value+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`19" name="comments`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`19" name="sign_off`+$TableCtr+`19" value="`+statorderData.orm_sc_cm_future_signoff+`" />
        </div>
      </td>
      </tr>
      <tr>
      <td><center>
        ORM_SC_DC
      Status Update to Discontinue <br>
      </center>
      </td>
      <td>
        <center>
          Change the status existing ISCV order to Discontinue
      </center>
      </td>
      <td>
        <center>
          Status changed to Cancelled
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`20" name="test_details`+$TableCtr+`20" value="`+statorderData.test_details+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`20" name="pass_fail`+$TableCtr+`20 value="`+statorderData.pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`20" name="expected_result`+$TableCtr+`20 value="`+statorderData.expected_result+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`20" name="actual_result`+$TableCtr+`20 value="`+statorderData.actual_result+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`20" name="comments`+$TableCtr+`20" value="`+statorderData.comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`20" name="sign_off`+$TableCtr+`20" value="`+statorderData.sign_off+`" />
        </div>
      </td>
      </tr>
      <tr>
      <td><center>
        ORM_SC_CM   <br>
      Status Update to Complete
      </center>
      </td>
      <td>
        <center>
          Change the status existing ISCV order to complete
      </center>
      </td>
      <td>
        <center>
          Status changed to Completed
      </center>
      </td>
      <td>
        <center>
          Order not seen in ISCV on scheduled date
        </center>
      </td>
      <td>
        <center>
          Order not seen on modality DWML on scheduled date
        </center>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="test_details`+$TableCtr+`21" name="test_details`+$TableCtr+`21" value="`+statorderData.test_details+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="pass_fail`+$TableCtr+`21" name="pass_fail`+$TableCtr+`21" value="`+statorderData.pass_fail+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="expected_result`+$TableCtr+`21" name="expected_result`+$TableCtr+`21" value="`+statorderData.expected_result+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="actual_result`+$TableCtr+`21" name="actual_result`+$TableCtr+`21" value="`+statorderData.actual_result+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="comments`+$TableCtr+`21" name="comments`+$TableCtr+`21" value="`+statorderData.comments+`" />
        </div>
      </td>
      <td>
        <div class="ui form">
          <input type="text" id="sign_off`+$TableCtr+`21" name="sign_off`+$TableCtr+`21" value="`+statorderData.sign_off+`" />
        </div>
      </td>

    </tbody>
  </table>
      `;


                $('#orderTable tbody:last').before(rowString2);
                $('.deleteRow').attr("disabled", true);
                $('#TableCtr').val($TableCtr);
                $TableCtr++ ;
        }); 

        //Editable Options
        $('.addRowButton').attr("disabled", true);
        $('.deleteRow').attr("disabled", true);
        $('.dropdown').unbind("click");
        if(edit==1)
        {
                $('.editField').prop('readOnly', false);
                $('.addRowButton').attr("disabled", false);
                $('.deleteRow').attr("disabled", false);
                $('.ui.dropdown').dropdown();
        }
});
