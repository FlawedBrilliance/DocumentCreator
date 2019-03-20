var section = '10/result_txt' ;


//Order Table

$TableCtr=0 ;
$("#addrow").click(function()
{
	
	$TableCtr++;


	rowString = `
			<table class="ui celled table black unstackable" ">
				
						<thead>
								<th colspan="2"><center>Test</center></th>
								<th colspan="2"><center>Expected Results</center></th>
								<th colspan="6"><center>Test Results</center></th>


							<tr>
								<th class="two wide"><center>Message</center></th>
								<th class="two wide"><center>ISCV Test Steps</center></th>
								<th class="three wide"><center>ISCV IBE</center></th>
								<th class="two wide"><center>HIS</center></th>
								<th class="one wide"><center>Date</center></th>
								<th class="one wide"><center>Pass/fail</center></th>
								<th class="one wide"><center>Expected Result</center></th>
								<th class="one wide"><center>Actual Result</center></th>
								<th class="two wide"><center>Comments</center></th>
								<th class="two wide"><center>Sign_off</center></th>
							</tr>
			              
			              	 

						</thead>

						<tbody>

								    <tr>
							    <td>
										ORU^R01
							    </td>
							    <td>
										Finalize a study in ISCV. Complete representative parts of the report and all patient/study info.  If orders interface present, use exams with HL7 orders.
							    </td>
							    <td>
										Verify message created and sent to HIS.
							    </td>
							    <td>
										Verify report transaction received and posted in HIS.
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Test_Date`+$TableCtr+`1" name="Test_Date`+$TableCtr+`1" />
							      </div>
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Pass_fail`+$TableCtr+`1" name="Pass_fail`+$TableCtr+`1" />
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Expected_Result" />
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Actual_Result" />
							      </div>
							    </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Comments`+$TableCtr+`1" name="Comments`+$TableCtr+`1" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Sign_off`+$TableCtr+`1" name="Sign_off`+$TableCtr+`1" />
							    </div>
							  </td>
							  </tr>


							  <tr>
							  <td>
									ORU^R01   <br>
								Amended
							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.
							  </td>
							  <td>
									Verify message created and sent to HIS.
							<br>
							Verify version 2.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date`+$TableCtr+`2" name="Test_Date`+$TableCtr+`2" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail`+$TableCtr+`2" name="Pass_fail`+$TableCtr+`2" />
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" />
									</div>
								</td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Comments`+$TableCtr+`2" name="Comments`+$TableCtr+`2" />
							  </div>
							  </td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Sign_off`+$TableCtr+`2" name="Sign_off`+$TableCtr+`2" />
							  </div>
							  </td>
							  </tr>

							  <tr>
							  <td>ORU^R01 <br>
							2nd Amended

							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.

							  </td>
							  <td>
									Verify message created and sent to HIS.  <br>
							Verify version 3.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date`+$TableCtr+`3" name="Test_Date`+$TableCtr+`3" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail`+$TableCtr+`3" name="Pass_fail`+$TableCtr+`3" />
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" />
									</div>
								</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Comments`+$TableCtr+`3" name="Comments`+$TableCtr+`3" />
							  </div>
							</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Sign_off`+$TableCtr+`3" name="Sign_off`+$TableCtr+`3" />
							  </div>
							</td>
							</tr>

							<td colspan="10"> <b>HL7 Mapping Validation - Insert HIS required fields below if not in list </b></td>

							<tr>
							<td> <b> <center>HL7 Element Name</center> </b>
							</td>
							<td>
							<b>	<center> ISCV IBE Parsing (Default) </center></b>
							</td>
							<td>
							<b>	<center>ISCV IBE Value (Default)</center> </b>
							</td>
							<td>
							<b>	<center> Expected HL7 Parsing </center></b>
							</td>
							<td> <b> <center>Expected Value</center> </b>
							</td>
							<td colspan="2"> <b> <center>Actual Value</center> </b>
							</td>
							<td>
							<b><center>	Pass_fail</center></b>
							</td>
							<td>
								<b><center>Comments</center></b>
							</td>
							<td>
							<b><center>	Sign_off</center></b>
							</td>
							</tr>
							<td colspan="10"> <b>MSH </b></td>

							<tr>
							<td>Field Separator
							</td>
							<td>
								MSH-1
							</td>
							<td>
								<div class="ui form">
										<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`1" name="ISCV_IBE_Parsing`+$TableCtr+`1" placeholder="|"/>
									</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`1" name="Expected_HL7_Parsing`+$TableCtr+`1" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`1" name="Expected_Value`+$TableCtr+`1" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`1" name="Actual_Value`+$TableCtr+`1" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`4" name="Pass_fail`+$TableCtr+`4" />
							</div>
							</td>

							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`4" name="Comments`+$TableCtr+`4" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`4" name="Sign_off`+$TableCtr+`4" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Encoding Characters
							</td>
							<td>
								MSH-2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`2" name="ISCV_IBE_Parsing`+$TableCtr+`2" placeholder="^~\&"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`2" name="Expected_HL7_Parsing`+$TableCtr+`2" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`2" name="Expected_Value`+$TableCtr+`2" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`2" name="Actual_Value`+$TableCtr+`2" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`5" name="Pass_fail`+$TableCtr+`5" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`5" name="Comments`+$TableCtr+`5" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`5" name="Sign_off`+$TableCtr+`5" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Application
							</td>
							<td>
								MSH-3
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`3" name="ISCV_IBE_Parsing`+$TableCtr+`3" placeholder="Xcelera"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`3" name="Expected_HL7_Parsing`+$TableCtr+`3" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`3" name="Expected_Value`+$TableCtr+`3" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`3" name="Actual_Value`+$TableCtr+`3" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`6" name="Pass_fail`+$TableCtr+`6" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`6" name="Comments`+$TableCtr+`6" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`6" name="Sign_off`+$TableCtr+`6" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Facility
							</td>
							<td>
								MSH-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`4" name="ISCV_IBE_Parsing`+$TableCtr+`4"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`4" name="Expected_HL7_Parsing`+$TableCtr+`4" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`4" name="Expected_Value`+$TableCtr+`4" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`4" name="Actual_Value`+$TableCtr+`4" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`7" name="Pass_fail`+$TableCtr+`7" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`7" name="Comments`+$TableCtr+`7" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`7" name="Sign_off`+$TableCtr+`7" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Application
							</td>
							<td>
								MSH-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`5" name="ISCV_IBE_Parsing`+$TableCtr+`5"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`5" name="Expected_HL7_Parsing`+$TableCtr+`5" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`5" name="Expected_Value`+$TableCtr+`5" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`5" name="Actual_Value`+$TableCtr+`5" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`8" name="Pass_fail`+$TableCtr+`8" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`8" name="Comments`+$TableCtr+`8" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`8" name="Sign_off`+$TableCtr+`8" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Facility
							</td>
							<td>
								MSH-6
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`6" name="ISCV_IBE_Parsing`+$TableCtr+`6"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`6" name="Expected_HL7_Parsing`+$TableCtr+`6" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`6" name="Expected_Value`+$TableCtr+`6" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`6" name="Actual_Value`+$TableCtr+`6" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`9" name="Pass_fail`+$TableCtr+`9" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`9" name="Comments`+$TableCtr+`9" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`9" name="Sign_off`+$TableCtr+`9" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Date Time of Message
							</td>
							<td>
								MSH-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`7" name="ISCV_IBE_Parsing`+$TableCtr+`7"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`7" name="Expected_HL7_Parsing`+$TableCtr+`7" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`7" name="Expected_Value`+$TableCtr+`7" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`7" name="Actual_Value`+$TableCtr+`7" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`10" name="Pass_fail`+$TableCtr+`10" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`10" name="Comments`+$TableCtr+`10" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`10" name="Sign_off`+$TableCtr+`10" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Message Type</b>

							</td>
							<td>
							<b>	MSH-9 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`8" name="ISCV_IBE_Parsing`+$TableCtr+`8"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`8" name="Expected_HL7_Parsing`+$TableCtr+`8" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`8" name="Expected_Value`+$TableCtr+`8" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`8" name="Actual_Value`+$TableCtr+`8" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`11" name="Pass_fail`+$TableCtr+`11" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`11" name="Comments`+$TableCtr+`11" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`11" name="Sign_off`+$TableCtr+`11" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Message Type
							</td>
							<td>
								MSH-9.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`9" name="ISCV_IBE_Parsing`+$TableCtr+`9" placeholder="ORU"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`9" name="Expected_HL7_Parsing`+$TableCtr+`9" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`9" name="Expected_Value`+$TableCtr+`9" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`9" name="Actual_Value`+$TableCtr+`9" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`12" name="Pass_fail`+$TableCtr+`12" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`12" name="Comments`+$TableCtr+`12" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`12" name="Sign_off`+$TableCtr+`12" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  Trigger Event
							</td>
							<td>
								MSH-9.2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`10" name="ISCV_IBE_Parsing`+$TableCtr+`10" placeholder="R01"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`10" name="Expected_HL7_Parsing`+$TableCtr+`10" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`10" name="Expected_Value`+$TableCtr+`10" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`10" name="Actual_Value`+$TableCtr+`10" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`13" name="Pass_fail`+$TableCtr+`13" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`13" name="Comments`+$TableCtr+`13" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`13" name="Sign_off`+$TableCtr+`13" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Message Control ID
							</td>
							<td>
								MSH-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`11" name="ISCV_IBE_Parsing`+$TableCtr+`11"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`11" name="Expected_HL7_Parsing`+$TableCtr+`11" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`11" name="Expected_Value`+$TableCtr+`11" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`11" name="Actual_Value`+$TableCtr+`11" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`14" name="Pass_fail`+$TableCtr+`14" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`14" name="Comments`+$TableCtr+`14" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`14" name="Sign_off`+$TableCtr+`14" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Processing ID
							</td>
							<td>
								MSH-11
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`12" name="ISCV_IBE_Parsing`+$TableCtr+`12" placeholder="p | T | D"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`12" name="Expected_HL7_Parsing`+$TableCtr+`12" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`12" name="Expected_Value`+$TableCtr+`12" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`12" name="Actual_Value`+$TableCtr+`12" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`15" name="Pass_fail`+$TableCtr+`15" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`15" name="Comments`+$TableCtr+`15" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`15" name="Sign_off`+$TableCtr+`15" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Version ID
							</td>
							<td>
								MSH-12
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`13" name="ISCV_IBE_Parsing`+$TableCtr+`13" placeholder="2.4"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`13" name="Expected_HL7_Parsing`+$TableCtr+`13" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`13" name="Actual_Value`+$TableCtr+`13" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`13" name="Expected_Value`+$TableCtr+`13" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`16" name="Pass_fail`+$TableCtr+`16" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`16" name="Comments`+$TableCtr+`16" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`16" name="Sign_off`+$TableCtr+`16" />
							</div>
							</td>
							</tr>

							<td colspan="8"> <b>PID </b></td>
							<tr>
							<td><b>Patient Identifier </b>

							</td>
							<td>
							<b>	PID-3 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`14" name="ISCV_IBE_Parsing`+$TableCtr+`14"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`14" name="Expected_HL7_Parsing`+$TableCtr+`14" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`14" name="Expected_Value`+$TableCtr+`14" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`14" name="Actual_Value`+$TableCtr+`14" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`17" name="Pass_fail`+$TableCtr+`17" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`17" name="Comments`+$TableCtr+`17" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`17" name="Sign_off`+$TableCtr+`17" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID
							</td>
							<td>
								PID-3.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`15" name="ISCV_IBE_Parsing`+$TableCtr+`15" placeholder="MRN"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`15" name="Expected_HL7_Parsing`+$TableCtr+`15" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`15" name="Expected_Value`+$TableCtr+`15" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`15" name="Actual_Value`+$TableCtr+`15" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`18" name="Pass_fail`+$TableCtr+`18" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`18" name="Comments`+$TableCtr+`18" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`18" name="Sign_off`+$TableCtr+`18" />
							</div>
							</td>
							</tr>

							<tr>
							<td> Assigning  <br>
							  Authority
							</td>
							<td>
								PID-3.4

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`16" name="ISCV_IBE_Parsing`+$TableCtr+`16"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`16" name="Expected_HL7_Parsing`+$TableCtr+`16" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`16" name="Expected_Value`+$TableCtr+`16" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`16" name="Actual_Value`+$TableCtr+`16" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`19" name="Pass_fail`+$TableCtr+`19" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`19" name="Comments`+$TableCtr+`19" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`19" name="Sign_off`+$TableCtr+`19" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Name</b>

							</td>
							<td>
							<b>	PID-5
							</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`17" name="ISCV_IBE_Parsing`+$TableCtr+`17"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`17" name="Expected_HL7_Parsing`+$TableCtr+`17" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`17" name="Expected_Value`+$TableCtr+`17" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`17" name="Actual_Value`+$TableCtr+`17" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`20" name="Pass_fail`+$TableCtr+`20" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`20" name="Comments`+$TableCtr+`20" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`20" name="Sign_off`+$TableCtr+`20" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name

							</td>
							<td>
								PID-5.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`18" name="ISCV_IBE_Parsing`+$TableCtr+`18"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`18" name="Expected_HL7_Parsing`+$TableCtr+`18" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`18" name="Expected_Value`+$TableCtr+`18" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`18" name="Actual_Value`+$TableCtr+`18" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`21" name="Pass_fail`+$TableCtr+`21" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`21" name="Comments`+$TableCtr+`21" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`21" name="Sign_off`+$TableCtr+`21" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name

							</td>
							<td>
								PID-5.2

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`19" name="ISCV_IBE_Parsing`+$TableCtr+`19"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`19" name="Expected_HL7_Parsing`+$TableCtr+`19" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`19" name="Expected_Value`+$TableCtr+`19" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`19" name="Actual_Value`+$TableCtr+`19" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`22" name="Pass_fail`+$TableCtr+`22" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`22" name="Comments`+$TableCtr+`22" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`22" name="Sign_off`+$TableCtr+`22" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Middle Name

							</td>
							<td>
								PID-5.3

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`20" name="ISCV_IBE_Parsing`+$TableCtr+`20"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`20" name="Expected_HL7_Parsing`+$TableCtr+`20" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`20" name="Expected_Value`+$TableCtr+`20" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`20" name="Actual_Value`+$TableCtr+`20" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`23" name="Pass_fail`+$TableCtr+`23" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`23" name="Comments`+$TableCtr+`23" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`23" name="Sign_off`+$TableCtr+`23" />
							</div>
							</td>
							</tr>

							<tr>
							<td>DOB
							</td>
							<td>
								PID-7

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`21" name="ISCV_IBE_Parsing`+$TableCtr+`21" placeholder="Format: YYYMMDD"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`21" name="Expected_HL7_Parsing`+$TableCtr+`21" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`21" name="Expected_Value`+$TableCtr+`21" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`21" name="Actual_Value`+$TableCtr+`21" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`24" name="Pass_fail`+$TableCtr+`24" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`24" name="Comments`+$TableCtr+`24" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`24" name="Sign_off`+$TableCtr+`24" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Gender

							</td>
							<td>
								PID-8

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`22" name="ISCV_IBE_Parsing`+$TableCtr+`22" placeholder="F | M | U"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`22" name="Expected_HL7_Parsing`+$TableCtr+`22" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`22" name="Expected_Value`+$TableCtr+`22" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`22" name="Actual_Value`+$TableCtr+`22" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`25" name="Pass_fail`+$TableCtr+`25" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`25" name="Comments`+$TableCtr+`25" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`25" name="Sign_off`+$TableCtr+`25" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Race

							</td>
							<td>
							  PID-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`23" name="ISCV_IBE_Parsing`+$TableCtr+`23" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`23" name="Expected_HL7_Parsing`+$TableCtr+`23" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`23" name="Expected_Value`+$TableCtr+`23" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`23" name="Actual_Value`+$TableCtr+`23" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`26" name="Pass_fail`+$TableCtr+`26" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`26" name="Comments`+$TableCtr+`26" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`26" name="Sign_off`+$TableCtr+`26" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Address</b>

							</td>
							<td>
							<b>	PID-11 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`24" name="ISCV_IBE_Parsing`+$TableCtr+`24" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`24" name="Expected_HL7_Parsing`+$TableCtr+`24" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`24" name="Expected_Value`+$TableCtr+`24" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`24" name="Actual_Value`+$TableCtr+`24" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`27" name="Pass_fail`+$TableCtr+`27" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`27" name="Comments`+$TableCtr+`27" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`27" name="Sign_off`+$TableCtr+`27" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Street Address

							</td>
							<td>
								PID-11.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`25" name="ISCV_IBE_Parsing`+$TableCtr+`25" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`25" name="Expected_HL7_Parsing`+$TableCtr+`25" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`25" name="Expected_Value`+$TableCtr+`25" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`25" name="Actual_Value`+$TableCtr+`25" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`28" name="Pass_fail`+$TableCtr+`28" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`28" name="Comments`+$TableCtr+`28" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`28" name="Sign_off`+$TableCtr+`28" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Other
							  Designation

							</td>
							<td>
								PID-11.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`26" name="ISCV_IBE_Parsing`+$TableCtr+`26" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`26" name="Expected_HL7_Parsing`+$TableCtr+`26" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`26" name="Expected_Value`+$TableCtr+`26" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`26" name="Actual_Value`+$TableCtr+`26" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`29" name="Pass_fail`+$TableCtr+`29" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`29" name="Comments`+$TableCtr+`29" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`29" name="Sign_off`+$TableCtr+`29" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  City
							</td>
							<td>
								PID-11.3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`27" name="ISCV_IBE_Parsing`+$TableCtr+`27" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`27" name="Expected_HL7_Parsing`+$TableCtr+`27" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`27" name="Expected_Value`+$TableCtr+`27" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`27" name="Actual_Value`+$TableCtr+`27" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`30" name="Pass_fail`+$TableCtr+`30" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`30" name="Comments`+$TableCtr+`30" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`30" name="Sign_off`+$TableCtr+`30" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  State
							</td>
							<td>
								PID-11.4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`28" name="ISCV_IBE_Parsing`+$TableCtr+`28" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`28" name="Expected_HL7_Parsing`+$TableCtr+`28" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`28" name="Expected_Value`+$TableCtr+`28" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`28" name="Actual_Value`+$TableCtr+`28" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`31" name="Pass_fail`+$TableCtr+`31" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`31" name="Comments`+$TableCtr+`31" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`31" name="Sign_off`+$TableCtr+`31" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  Zip Code
							</td>
							<td>
								PID-11.5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`29" name="ISCV_IBE_Parsing`+$TableCtr+`29"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`29" name="Expected_HL7_Parsing`+$TableCtr+`29" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`29" name="Expected_Value`+$TableCtr+`29" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`29" name="Actual_Value`+$TableCtr+`29" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`32" name="Pass_fail`+$TableCtr+`32" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`32" name="Comments`+$TableCtr+`32" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`32" name="Sign_off`+$TableCtr+`32" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Home Phone
							</td>
							<td>
								PID-13
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`30" name="ISCV_IBE_Parsing`+$TableCtr+`30"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`30" name="Expected_HL7_Parsing`+$TableCtr+`30" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`30" name="Expected_Value`+$TableCtr+`30" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`30" name="Actual_Value`+$TableCtr+`30" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`33" name="Pass_fail`+$TableCtr+`33" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`33" name="Comments`+$TableCtr+`33" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`33" name="Sign_off`+$TableCtr+`33" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Other Phone

							</td>
							<td>
								PID-14

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`31" name="ISCV_IBE_Parsing`+$TableCtr+`31" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`31" name="Expected_HL7_Parsing`+$TableCtr+`31" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`31" name="Expected_Value`+$TableCtr+`31" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`31" name="Actual_Value`+$TableCtr+`31" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`34" name="Pass_fail`+$TableCtr+`34" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`34" name="Comments`+$TableCtr+`34" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`34" name="Sign_off`+$TableCtr+`34" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Patient Account

							</td>
							<td>
								PID-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`32" name="ISCV_IBE_Parsing`+$TableCtr+`32" placeholder="	ISCV Study Config 4" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`32" name="Expected_HL7_Parsing`+$TableCtr+`32" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`32" name="Expected_Value`+$TableCtr+`32" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`32" name="Actual_Value`+$TableCtr+`32" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`35" name="Pass_fail`+$TableCtr+`35" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`35" name="Comments`+$TableCtr+`35" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`35" name="Sign_off`+$TableCtr+`35" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>PV1 </b></td>

							<tr>
							<td>Patient Class
							</td>
							<td>
								PV1-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`33" name="ISCV_IBE_Parsing`+$TableCtr+`33" placeholder="O| I | E" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`33" name="Expected_HL7_Parsing`+$TableCtr+`33" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`33" name="Expected_Value`+$TableCtr+`33" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`33" name="Actual_Value`+$TableCtr+`33" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`36" name="Pass_fail`+$TableCtr+`36" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`36" name="Comments`+$TableCtr+`36" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`36" name="Sign_off`+$TableCtr+`36" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Patient Location
							</td>
							<td>
								PV1-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`34" name="ISCV_IBE_Parsing`+$TableCtr+`34" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`34" name="Expected_HL7_Parsing`+$TableCtr+`34" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`34" name="Expected_Value`+$TableCtr+`34" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`34" name="Actual_Value`+$TableCtr+`34" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`37" name="Pass_fail`+$TableCtr+`37" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`37" name="Comments`+$TableCtr+`37" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`37" name="Sign_off`+$TableCtr+`37" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>ReferringDoctor</b>
							</td>
							<td>
								<b>PV1-8</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`35" name="ISCV_IBE_Parsing`+$TableCtr+`35" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`35" name="Expected_HL7_Parsing`+$TableCtr+`35" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`35" name="Expected_Value`+$TableCtr+`35" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`35" name="Actual_Value`+$TableCtr+`35" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`38" name="Pass_fail`+$TableCtr+`38" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`38" name="Comments`+$TableCtr+`38" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`38" name="Sign_off`+$TableCtr+`38" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID Number
							</td>
							<td>
								PV1-8.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`36" name="ISCV_IBE_Parsing`+$TableCtr+`36"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`36" name="Expected_HL7_Parsing`+$TableCtr+`36" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`36" name="Expected_Value`+$TableCtr+`36" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`36" name="Actual_Value`+$TableCtr+`36" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`39" name="Pass_fail`+$TableCtr+`39" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`39" name="Comments`+$TableCtr+`39" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`39" name="Sign_off`+$TableCtr+`39" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name
							</td>
							<td>
								PV1-8.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`37" name="ISCV_IBE_Parsing`+$TableCtr+`37" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`37" name="Expected_HL7_Parsing`+$TableCtr+`37" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`37" name="Expected_Value`+$TableCtr+`37" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`37" name="Actual_Value`+$TableCtr+`37" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`40" name="Pass_fail`+$TableCtr+`40" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`40" name="Comments`+$TableCtr+`40" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`40" name="Sign_off`+$TableCtr+`40" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>ORC </b></td>

							<tr>
							<td>Order Control
							</td>
							<td>
								ORC-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`38" name="ISCV_IBE_Parsing`+$TableCtr+`38" placeholder="RE" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`38" name="Expected_HL7_Parsing`+$TableCtr+`38" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`38" name="Expected_Value`+$TableCtr+`38" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`38" name="Actual_Value`+$TableCtr+`38" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`41" name="Pass_fail`+$TableCtr+`41" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`41" name="Comments`+$TableCtr+`41" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`41" name="Sign_off`+$TableCtr+`41" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								ORC-3
							</td>
							<td><div class="ui form">
								<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`39" name="ISCV_IBE_Parsing`+$TableCtr+`39" placeholder="ISCV Study ID"  />
							</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`39" name="Expected_HL7_Parsing`+$TableCtr+`39" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`39" name="Expected_Value`+$TableCtr+`39" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`39" name="Actual_Value`+$TableCtr+`39" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`42" name="Pass_fail`+$TableCtr+`42" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`42" name="Comments`+$TableCtr+`42" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`42" name="Sign_off`+$TableCtr+`42" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Order Status
							</td>
							<td>
								 ORC-5

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`40" name="ISCV_IBE_Parsing`+$TableCtr+`40"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`40" name="Expected_HL7_Parsing`+$TableCtr+`40" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`40" name="Expected_Value`+$TableCtr+`40" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`40" name="Actual_Value`+$TableCtr+`40" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`43" name="Pass_fail`+$TableCtr+`43" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`43" name="Comments`+$TableCtr+`43" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`43" name="Sign_off`+$TableCtr+`43" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>OBR </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBR-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`41" name="ISCV_IBE_Parsing`+$TableCtr+`41" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`41" name="Expected_HL7_Parsing`+$TableCtr+`41" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`41" name="Expected_Value`+$TableCtr+`41" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`41" name="Actual_Value`+$TableCtr+`41" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`44" name="Pass_fail`+$TableCtr+`44" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`44" name="Comments`+$TableCtr+`44" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`44" name="Sign_off`+$TableCtr+`44" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Placer Order Number
							</td>
							<td>
								OBR-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`42" name="ISCV_IBE_Parsing`+$TableCtr+`42" placeholder="HIS Order ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`42" name="Expected_HL7_Parsing`+$TableCtr+`42" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`42" name="Expected_Value`+$TableCtr+`42" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`42" name="Actual_Value`+$TableCtr+`42" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`45" name="Pass_fail`+$TableCtr+`45" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`45" name="Comments`+$TableCtr+`45" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`45" name="Sign_off`+$TableCtr+`45" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								OBR-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`43" name="ISCV_IBE_Parsing`+$TableCtr+`43" placeholder="ISCV Study ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`43" name="Expected_HL7_Parsing`+$TableCtr+`43" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`43" name="Expected_Value`+$TableCtr+`43" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`43" name="Actual_Value`+$TableCtr+`43" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`46" name="Pass_fail`+$TableCtr+`46" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`46" name="Comments`+$TableCtr+`46" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`46" name="Sign_off`+$TableCtr+`46" />
							</div>
							</td>
							</tr>

							<tr>
							<td> <b>Universal Service ID</b>
							</td>
							<td>
							<b>	OBR-4 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`44" name="ISCV_IBE_Parsing`+$TableCtr+`44" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`44" name="Expected_HL7_Parsing`+$TableCtr+`44" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`44" name="Expected_Value`+$TableCtr+`44" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`44" name="Actual_Value`+$TableCtr+`44" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`47" name="Pass_fail`+$TableCtr+`47" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`47" name="Comments`+$TableCtr+`47" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`47" name="Sign_off`+$TableCtr+`47" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Procedure ID
							</td>
							<td>
								OBR-4.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`45" name="ISCV_IBE_Parsing`+$TableCtr+`45" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`45" name="Expected_HL7_Parsing`+$TableCtr+`45" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`45" name="Expected_Value`+$TableCtr+`45" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`45" name="Actual_Value`+$TableCtr+`45" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`48" name="Pass_fail`+$TableCtr+`48" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`48" name="Comments`+$TableCtr+`48" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`48" name="Sign_off`+$TableCtr+`48" />
							</div>
							</td>
							</tr>

							<tr>
							<td> Procedure
							  Description
							</td>
							<td>
								OBR-4.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`46" name="ISCV_IBE_Parsing`+$TableCtr+`46" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`46" name="Expected_HL7_Parsing`+$TableCtr+`46" placeholder="ISCV Study Type" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`46" name="Expected_Value`+$TableCtr+`46" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`46" name="Actual_Value`+$TableCtr+`46" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`49" name="Pass_fail`+$TableCtr+`49" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`49" name="Comments`+$TableCtr+`49" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`49" name="Sign_off`+$TableCtr+`49" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Start Date Time
							</td>
							<td>
								OBR-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`47" name="ISCV_IBE_Parsing`+$TableCtr+`47" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`47" name="Expected_HL7_Parsing`+$TableCtr+`47" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`47" name="Expected_Value`+$TableCtr+`47" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`47" name="Actual_Value`+$TableCtr+`47" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`50" name="Pass_fail`+$TableCtr+`50" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`50" name="Comments`+$TableCtr+`50" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`50" name="Sign_off`+$TableCtr+`50" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation End Date Time
							</td>
							<td>
								OBR-8
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`48" name="ISCV_IBE_Parsing`+$TableCtr+`48"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`48" name="Expected_HL7_Parsing`+$TableCtr+`48" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`48" name="Expected_Value`+$TableCtr+`48" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`48" name="Actual_Value`+$TableCtr+`48" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`51" name="Pass_fail`+$TableCtr+`51" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`51" name="Comments`+$TableCtr+`51" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`51" name="Sign_off`+$TableCtr+`51" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Ordering Physician
							</td>
							<td>
								OBR-16
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`49" name="ISCV_IBE_Parsing`+$TableCtr+`49" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`49" name="Expected_HL7_Parsing`+$TableCtr+`49" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`49" name="Expected_Value`+$TableCtr+`49" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`49" name="Actual_Value`+$TableCtr+`49" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`52" name="Pass_fail`+$TableCtr+`52" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`52" name="Comments`+$TableCtr+`52" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`52" name="Sign_off`+$TableCtr+`52" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Accession Number
							</td>
							<td>
								OBR-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`50" name="ISCV_IBE_Parsing`+$TableCtr+`50" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`50" name="Expected_HL7_Parsing`+$TableCtr+`50" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`50" name="Expected_Value`+$TableCtr+`50" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`50" name="Actual_Value`+$TableCtr+`50" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`53" name="Pass_fail`+$TableCtr+`53" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`53" name="Comments`+$TableCtr+`53" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`53" name="Sign_off`+$TableCtr+`53" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Report Version
							</td>
							<td>
								OBR-20
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`51" name="ISCV_IBE_Parsing`+$TableCtr+`51" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`51" name="Expected_HL7_Parsing`+$TableCtr+`51" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`51" name="Expected_Value`+$TableCtr+`51" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`51" name="Actual_Value`+$TableCtr+`51" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`54" name="Pass_fail`+$TableCtr+`54" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`54" name="Comments`+$TableCtr+`54" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`54" name="Sign_off`+$TableCtr+`54" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Last Signed Date Time
							</td>
							<td>
								OBR-22
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`52" name="ISCV_IBE_Parsing`+$TableCtr+`52" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`52" name="Expected_HL7_Parsing`+$TableCtr+`52" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`52" name="Expected_Value`+$TableCtr+`52" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`52" name="Actual_Value`+$TableCtr+`52" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`55" name="Pass_fail`+$TableCtr+`55" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`55" name="Comments`+$TableCtr+`55" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`55" name="Sign_off`+$TableCtr+`55" />
							</div>
							</td>
							</tr>

							<tr>
							<tr>
							<td>Diagnostic Serv Sect ID
							</td>
							<td>
								OBR-24
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`53" name="ISCV_IBE_Parsing`+$TableCtr+`53"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`53" name="Expected_HL7_Parsing`+$TableCtr+`53" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`53" name="Expected_Value`+$TableCtr+`53" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`53" name="Actual_Value`+$TableCtr+`53" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`56" name="Pass_fail`+$TableCtr+`56" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`56" name="Comments`+$TableCtr+`56" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`56" name="Sign_off`+$TableCtr+`56" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Status
							</td>
							<td>
								OBR-25
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`54" name="ISCV_IBE_Parsing`+$TableCtr+`54" placeholder="CUS" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`54" name="Expected_HL7_Parsing`+$TableCtr+`54" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`54" name="Expected_Value`+$TableCtr+`54" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`54" name="Actual_Value`+$TableCtr+`54" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`57" name="Pass_fail`+$TableCtr+`57" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`57" name="Comments`+$TableCtr+`57" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`57" name="Sign_off`+$TableCtr+`57" />
							</div>
							</td>
							</tr>

							<tr>
							
							<td>Reason for Study

							</td>
							<td>
								OBR-31

							</td>

							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`55" name="ISCV_IBE_Parsing`+$TableCtr+`55" placeholder="	P | F | C | R | D" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`55" name="Expected_HL7_Parsing`+$TableCtr+`55" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`55" name="Expected_Value`+$TableCtr+`55" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`55" name="Actual_Value`+$TableCtr+`55" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`58" name="Pass_fail`+$TableCtr+`58" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`58" name="Comments`+$TableCtr+`58" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`58" name="Sign_off`+$TableCtr+`58" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Principal Interpreter</b>

							</td>
							<td>
								<b>OBR-32 </b>


							</td>


							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`56" name="ISCV_IBE_Parsing`+$TableCtr+`56"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`56" name="Expected_HL7_Parsing`+$TableCtr+`56" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`56" name="Expected_Value`+$TableCtr+`56" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`56" name="Actual_Value`+$TableCtr+`56" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`59" name="Pass_fail`+$TableCtr+`59" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`59" name="Comments`+$TableCtr+`59" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`59" name="Sign_off`+$TableCtr+`59" />
							</div>
							</td>
							</tr>

							<tr>
							
							<td>  ID Number
							</td>
							<td>
								OBR-32.1.1
							</td>


							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`57" name="ISCV_IBE_Parsing`+$TableCtr+`57"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`57" name="Expected_HL7_Parsing`+$TableCtr+`57" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`57" name="Expected_Value`+$TableCtr+`57" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`57" name="Actual_Value`+$TableCtr+`57" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`60" name="Pass_fail`+$TableCtr+`60" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`60" name="Comments`+$TableCtr+`60" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`60" name="Sign_off`+$TableCtr+`60" />
							</div>
							</td>
							</tr>

							<tr>
							
							<td>  Family Name
							</td>
							<td>
								OBR-32.1.2
							</td>

							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`58" name="ISCV_IBE_Parsing`+$TableCtr+`58"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`58" name="Expected_HL7_Parsing`+$TableCtr+`58" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`58" name="Expected_Value`+$TableCtr+`58" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`58" name="Actual_Value`+$TableCtr+`58" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`61" name="Pass_fail`+$TableCtr+`61" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`61" name="Comments`+$TableCtr+`61" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`61" name="Sign_off`+$TableCtr+`61" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name
							</td>
							<td>
								OBR-32.1.3
							</td>


							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`59" name="ISCV_IBE_Parsing`+$TableCtr+`59"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`59" name="Expected_HL7_Parsing`+$TableCtr+`59" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`59" name="Expected_Value`+$TableCtr+`59" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`59" name="Actual_Value`+$TableCtr+`59" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`62" name="Pass_fail`+$TableCtr+`62" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`62" name="Comments`+$TableCtr+`62" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`62" name="Sign_off`+$TableCtr+`62" />
							</div>
							</td>
							</tr>

							<tr>
							
							<td>  Middle Name
							</td>
							<td>
								OBR-32.1.4
							</td>

							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`60" name="ISCV_IBE_Parsing`+$TableCtr+`60"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`60" name="Expected_HL7_Parsing`+$TableCtr+`60" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`60" name="Expected_Value`+$TableCtr+`60" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`60" name="Actual_Value`+$TableCtr+`60" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`63" name="Pass_fail`+$TableCtr+`63" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`63" name="Comments`+$TableCtr+`63" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`63" name="Sign_off`+$TableCtr+`63" />
							</div>
							</td>
							</tr>



							<td colspan="10"> <b>OBX </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBX-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`61" name="ISCV_IBE_Parsing`+$TableCtr+`61" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`61" name="Expected_HL7_Parsing`+$TableCtr+`61" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`61" name="Expected_Value`+$TableCtr+`61" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`61" name="Actual_Value`+$TableCtr+`61" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`64" name="Pass_fail`+$TableCtr+`64" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`64" name="Comments`+$TableCtr+`64" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`64" name="Sign_off`+$TableCtr+`64" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Value Type
							</td>
							<td>
								OBX-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`62" name="ISCV_IBE_Parsing`+$TableCtr+`62" placeholder="TX" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`62" name="Expected_HL7_Parsing`+$TableCtr+`62" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`62" name="Expected_Value`+$TableCtr+`62" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`62" name="Actual_Value`+$TableCtr+`62" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`65" name="Pass_fail`+$TableCtr+`65" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`65" name="Comments`+$TableCtr+`65" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`65" name="Sign_off`+$TableCtr+`65" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Observation Identifier
							 </b>
							</td>
							<td>
							<b>	OBX-3 </b>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`63" name="ISCV_IBE_Parsing`+$TableCtr+`63" placeholder="ISCV Study ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`63" name="Expected_HL7_Parsing`+$TableCtr+`63" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`63" name="Expected_Value`+$TableCtr+`63" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`63" name="Actual_Value`+$TableCtr+`63" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`66" name="Pass_fail`+$TableCtr+`66" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`66" name="Comments`+$TableCtr+`66" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`66" name="Sign_off`+$TableCtr+`66" />
							</div>
							</td>
							</tr>

							<tr>
							<td>   Identifier

							</td>
							<td>
							  OBX-3.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`64" name="ISCV_IBE_Parsing`+$TableCtr+`64" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`64" name="Expected_HL7_Parsing`+$TableCtr+`64" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`64" name="Expected_Value`+$TableCtr+`64" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`64" name="Actual_Value`+$TableCtr+`64" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`67" name="Pass_fail`+$TableCtr+`67" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`67" name="Comments`+$TableCtr+`67" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`67" name="Sign_off`+$TableCtr+`67" />
							</div>
							</td>
							</tr>

							<tr>
							<td>    Text
							</td>
							<td>
								OBX-3.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`65" name="ISCV_IBE_Parsing`+$TableCtr+`65" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`65" name="Expected_HL7_Parsing`+$TableCtr+`65" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`65" name="Expected_Value`+$TableCtr+`65" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`65" name="Actual_Value`+$TableCtr+`65" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`68" name="Pass_fail`+$TableCtr+`68" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`68" name="Comments`+$TableCtr+`68" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`68" name="Sign_off`+$TableCtr+`68" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Sub Identifier
							</td>
							<td>
								OBX-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`66" name="ISCV_IBE_Parsing`+$TableCtr+`66" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`66" name="Expected_HL7_Parsing`+$TableCtr+`66" placeholder="1" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`66" name="Expected_Value`+$TableCtr+`66" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`66" name="Actual_Value`+$TableCtr+`66" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`69" name="Pass_fail`+$TableCtr+`69" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`69" name="Comments`+$TableCtr+`69" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`69" name="Sign_off`+$TableCtr+`69" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Value
							</td>
							<td>
								OBX-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`67" name="ISCV_IBE_Parsing`+$TableCtr+`67" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`67" name="Expected_HL7_Parsing`+$TableCtr+`67" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`67" name="Expected_Value`+$TableCtr+`67" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`67" name="Actual_Value`+$TableCtr+`67" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`70" name="Pass_fail`+$TableCtr+`70" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`70" name="Comments`+$TableCtr+`70" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`70" name="Sign_off`+$TableCtr+`70" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Units
							</td>
			


							<tr>
							<td>Observation Status
							</td>
							<td>
								OBX-11

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`68" name="ISCV_IBE_Parsing`+$TableCtr+`68" placeholder="P | F | C | R | D" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`68" name="Expected_HL7_Parsing`+$TableCtr+`68" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`68" name="Expected_Value`+$TableCtr+`68" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`68" name="Actual_Value`+$TableCtr+`68" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`71" name="Pass_fail`+$TableCtr+`71" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`71" name="Comments`+$TableCtr+`71" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`71" name="Sign_off`+$TableCtr+`71" />
							</div>
							</td>
							</tr>


							<td colspan="10"> <b> ZDS
							 </b></td>

							<tr>
							<td>Study Instance UID
							</td>
							<td>
								ZDS-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`69" name="ISCV_IBE_Parsing`+$TableCtr+`69" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`69" name="Expected_HL7_Parsing`+$TableCtr+`69" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`69" name="Expected_Value`+$TableCtr+`69" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`69" name="Actual_Value`+$TableCtr+`69" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`72" name="Pass_fail`+$TableCtr+`72" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`72" name="Comments`+$TableCtr+`72" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`72" name="Sign_off`+$TableCtr+`72" />
							</div>
							</td>
							</tr>

							</tbody>
						</table>

							`

	$('#results_textTable').append(rowString);
	$('#TableCtr').val($TableCtr);
	$('.editField').prop('readOnly', false);
	
});






var url = apiUrl+'/section10/result_txt/fetch_oru.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext,function(key,resultpdf)
        {
                rowString = `
                
    		 <table class="ui celled table black unstackable" ">
				
						<thead>
								<th colspan="2"><center>Test</center></th>
								<th colspan="2"><center>Expected Results</center></th>
								<th colspan="6"><center>Test Results</center></th>


							<tr>
								<th class="two wide"><center>Message</center></th>
								<th class="two wide"><center>ISCV Test Steps</center></th>
								<th class="three wide"><center>ISCV IBE</center></th>
								<th class="two wide"><center>HIS</center></th>
								<th class="one wide"><center>Date</center></th>
								<th class="one wide"><center>Pass/fail</center></th>
								<th class="one wide"><center>Expected Result</center></th>
								<th class="one wide"><center>Actual Result</center></th>
								<th class="two wide"><center>Comments</center></th>
								<th class="two wide"><center>Sign_off</center></th>
							</tr>
			              
			              	 

						</thead>

						<tbody>

								    <tr>
							    <td>
										ORU^R01
							    </td>
							    <td>
										Finalize a study in ISCV. Complete representative parts of the report and all patient/study info.  If orders interface present, use exams with HL7 orders.
							    </td>
							    <td>
										Verify message created and sent to HIS.
							    </td>
							    <td>
										Verify report transaction received and posted in HIS.
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Test_Date`+$TableCtr+`1" name="Test_Date`+$TableCtr+`1" value="`+resultpdf.oru_date+`"/>
							      </div>
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Pass_fail`+$TableCtr+`1" name="Pass_fail`+$TableCtr+`1" value="`+resultpdf.oru_pass+`"/>
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Expected_Result" name="Expected_Result" value="`+resultpdf.oru_expected_val+`"/>
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Actual_Result" name="Actual_Result" value="`+resultpdf.oru_actual_val+`"/>
							      </div>
							    </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Comments`+$TableCtr+`1" name="Comments`+$TableCtr+`1" value="`+resultpdf.oru_comments+`"/>
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Sign_off`+$TableCtr+`1" name="Sign_off`+$TableCtr+`1" value="`+resultpdf.oru_signoff+`"/>
							    </div>
							  </td>
							  </tr>


							  <tr>
							  <td>
									ORU^R01   <br>
								Amended
							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.
							  </td>
							  <td>
									Verify message created and sent to HIS.
							<br>
							Verify version 2.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date`+$TableCtr+`2" name="Test_Date`+$TableCtr+`2" value="`+resultpdf.oru_amended_date+`"/>
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail`+$TableCtr+`2" name="Pass_fail`+$TableCtr+`2" value="`+resultpdf.oru_amended_pass+`"/>
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" name="Expected_Result1" value="`+resultpdf.oru_amended_expected_val+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" name="Actual_Result1" value="`+resultpdf.oru_amended_actual_val+`"/>
									</div>
								</td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Comments`+$TableCtr+`2" name="Comments`+$TableCtr+`2" value="`+resultpdf.oru_amended_comments+`"/>
							  </div>
							  </td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Sign_off`+$TableCtr+`2" name="Sign_off`+$TableCtr+`2" value="`+resultpdf.oru_amended_signoff+`"/>
							  </div>
							  </td>
							  </tr>

							  <tr>
							  <td>ORU^R01 <br>
							2nd Amended

							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.

							  </td>
							  <td>
									Verify message created and sent to HIS.  <br>
							Verify version 3.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date`+$TableCtr+`3" name="Test_Date`+$TableCtr+`3" value="`+resultpdf.oru_amended2_date+`"/>
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail`+$TableCtr+`3" name="Pass_fail`+$TableCtr+`3" value="`+resultpdf.oru_amended2_pass+`"/>
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" name="Expected_Result2" value="`+resultpdf.oru_amended2_expected_val+`"/>
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" name="Actual_Result2" value="`+resultpdf.oru_amended2_actual_val+`"/>
									</div>
								</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Comments`+$TableCtr+`3" name="Comments`+$TableCtr+`3" value="`+resultpdf.oru_amended2_comments+`"/>
							  </div>
							</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Sign_off`+$TableCtr+`3" name="Sign_off`+$TableCtr+`3" value="`+resultpdf.oru_amended2_signoff+`"/>
							  </div>
							</td>
							</tr>
						</tbody>
						</table>

                ` ;


                $('#results_textTable tbody:last').before(rowString);
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



//FETCH_MSH



var url1 = apiUrl+'/section10/result_txt/fetch_msh.php?prs=' + prs + '&token=' + token;
$.getJSON(url1,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_msh,function(key,resultpdfmsh)
        {
                rowString1 = `

                <table class="ui celled table black unstackable" ">
                <tbody>
    		 <td colspan="10"> <b>HL7 Mapping Validation - Insert HIS required fields below if not in list </b></td>

							<tr>
							<td> <b> <center>HL7 Element Name</center> </b>
							</td>
							<td>
							<b>	<center> ISCV IBE Parsing (Default) </center></b>
							</td>
							<td>
							<b>	<center>ISCV IBE Value (Default)</center> </b>
							</td>
							<td>
							<b>	<center> Expected HL7 Parsing </center></b>
							</td>
							<td> <b> <center>Expected Value</center> </b>
							</td>
							<td colspan="2"> <b> <center>Actual Value</center> </b>
							</td>
							<td>
							<b><center>	Pass_fail</center></b>
							</td>
							<td>
								<b><center>Comments</center></b>
							</td>
							<td>
							<b><center>	Sign_off</center></b>
							</td>
							</tr>
							<td colspan="10"> <b>MSH </b></td>

							<tr>
							<td>Field Separator
							</td>
							<td>
								MSH-1
							</td>
							<td>
								<div class="ui form">
										<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`1" name="ISCV_IBE_Parsing`+$TableCtr+`1" placeholder="|" value="`+resultpdfmsh.msh_1_iscv_val+`"/>
									</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`1" name="Expected_HL7_Parsing`+$TableCtr+`1" value="`+resultpdfmsh.msh_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`1" name="Expected_Value`+$TableCtr+`1" value="`+resultpdfmsh.msh_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`1" name="Actual_Value`+$TableCtr+`1" value="`+resultpdfmsh.msh_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`4" name="Pass_fail`+$TableCtr+`4" value="`+resultpdfmsh.msh_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`4" name="Comments`+$TableCtr+`4" value="`+resultpdfmsh.msh_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`4" name="Sign_off`+$TableCtr+`4" value="`+resultpdfmsh.msh_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Encoding Characters
							</td>
							<td>
								MSH-2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`2" name="ISCV_IBE_Parsing`+$TableCtr+`2" placeholder="^~\&"value="`+resultpdfmsh.msh_2_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`2" name="Expected_HL7_Parsing`+$TableCtr+`2" value="`+resultpdfmsh.msh_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`2" name="Expected_Value`+$TableCtr+`2" value="`+resultpdfmsh.msh_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`2" name="Actual_Value`+$TableCtr+`2" value="`+resultpdfmsh.msh_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`5" name="Pass_fail`+$TableCtr+`5" value="`+resultpdfmsh.msh_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`5" name="Comments`+$TableCtr+`5" value="`+resultpdfmsh.msh_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`5" name="Sign_off`+$TableCtr+`5" value="`+resultpdfmsh.msh_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Application
							</td>
							<td>
								MSH-3
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`3" name="ISCV_IBE_Parsing`+$TableCtr+`3" placeholder="Xcelera"value="`+resultpdfmsh.msh_3_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`3" name="Expected_HL7_Parsing`+$TableCtr+`3" value="`+resultpdfmsh.msh_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`3" name="Expected_Value`+$TableCtr+`3" value="`+resultpdfmsh.msh_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`3" name="Actual_Value`+$TableCtr+`3" value="`+resultpdfmsh.msh_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`6" name="Pass_fail`+$TableCtr+`6" value="`+resultpdfmsh.msh_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`6" name="Comments`+$TableCtr+`6" value="`+resultpdfmsh.msh_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`6" name="Sign_off`+$TableCtr+`6" value="`+resultpdfmsh.msh_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Facility
							</td>
							<td>
								MSH-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`4" name="ISCV_IBE_Parsing`+$TableCtr+`4"value="`+resultpdfmsh.msh_4_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`4" name="Expected_HL7_Parsing`+$TableCtr+`4" value="`+resultpdfmsh.msh_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`4" name="Expected_Value`+$TableCtr+`4" value="`+resultpdfmsh.msh_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`4" name="Actual_Value`+$TableCtr+`4" value="`+resultpdfmsh.msh_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`7" name="Pass_fail`+$TableCtr+`7" value="`+resultpdfmsh.msh_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`7" name="Comments`+$TableCtr+`7" value="`+resultpdfmsh.msh_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`7" name="Sign_off`+$TableCtr+`7" value="`+resultpdfmsh.msh_4_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Application
							</td>
							<td>
								MSH-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`5" name="ISCV_IBE_Parsing`+$TableCtr+`5" value="`+resultpdfmsh.msh_5_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`5" name="Expected_HL7_Parsing`+$TableCtr+`5" value="`+resultpdfmsh.msh_5_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`5" name="Expected_Value`+$TableCtr+`5" value="`+resultpdfmsh.msh_5_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`5" name="Actual_Value`+$TableCtr+`5" value="`+resultpdfmsh.msh_5_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`8" name="Pass_fail`+$TableCtr+`8" value="`+resultpdfmsh.msh_5_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`8" name="Comments`+$TableCtr+`8" value="`+resultpdfmsh.msh_5_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`8" name="Sign_off`+$TableCtr+`8" value="`+resultpdfmsh.msh_5_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Facility
							</td>
							<td>
								MSH-6
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`6" name="ISCV_IBE_Parsing`+$TableCtr+`6"value="`+resultpdfmsh.msh_6_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`6" name="Expected_HL7_Parsing`+$TableCtr+`6" value="`+resultpdfmsh.msh_6_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`6" name="Expected_Value`+$TableCtr+`6" value="`+resultpdfmsh.msh_6_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`6" name="Actual_Value`+$TableCtr+`6" value="`+resultpdfmsh.msh_6_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`9" name="Pass_fail`+$TableCtr+`9" value="`+resultpdfmsh.msh_6_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`9" name="Comments`+$TableCtr+`9" value="`+resultpdfmsh.msh_6_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`9" name="Sign_off`+$TableCtr+`9" value="`+resultpdfmsh.msh_6_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Date Time of Message
							</td>
							<td>
								MSH-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`7" name="ISCV_IBE_Parsing`+$TableCtr+`7" value="`+resultpdfmsh.msh_7_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`7" name="Expected_HL7_Parsing`+$TableCtr+`7" value="`+resultpdfmsh.msh_7_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`7" name="Expected_Value`+$TableCtr+`7" value="`+resultpdfmsh.msh_7_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`7" name="Actual_Value`+$TableCtr+`7" value="`+resultpdfmsh.msh_7_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`10" name="Pass_fail`+$TableCtr+`10" value="`+resultpdfmsh.msh_7_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`10" name="Comments`+$TableCtr+`10" value="`+resultpdfmsh.msh_7_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`10" name="Sign_off`+$TableCtr+`10" value="`+resultpdfmsh.msh_7_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Message Type</b>

							</td>
							<td>
							<b>	MSH-9 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`8" name="ISCV_IBE_Parsing`+$TableCtr+`8"value="`+resultpdfmsh.msh_9_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`8" name="Expected_HL7_Parsing`+$TableCtr+`8" value="`+resultpdfmsh.msh_9_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`8" name="Expected_Value`+$TableCtr+`8" value="`+resultpdfmsh.msh_9_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`8" name="Actual_Value`+$TableCtr+`8" value="`+resultpdfmsh.msh_9_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`11" name="Pass_fail`+$TableCtr+`11" value="`+resultpdfmsh.msh_9_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`11" name="Comments`+$TableCtr+`11" value="`+resultpdfmsh.msh_9_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`11" name="Sign_off`+$TableCtr+`11" value="`+resultpdfmsh.msh_9_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Message Type
							</td>
							<td>
								MSH-9.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`9" name="ISCV_IBE_Parsing`+$TableCtr+`9" placeholder="ORU"value="`+resultpdfmsh.msh_9_1_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`9" name="Expected_HL7_Parsing`+$TableCtr+`9" value="`+resultpdfmsh.msh_9_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`9" name="Expected_Value`+$TableCtr+`9" value="`+resultpdfmsh.msh_9_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`9" name="Actual_Value`+$TableCtr+`9" value="`+resultpdfmsh.msh_9_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`12" name="Pass_fail`+$TableCtr+`12" value="`+resultpdfmsh.msh_9_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`12" name="Comments`+$TableCtr+`12" value="`+resultpdfmsh.msh_9_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`12" name="Sign_off`+$TableCtr+`12" value="`+resultpdfmsh.msh_9_1_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>  Trigger Event
							</td>
							<td>
								MSH-9.2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`10" name="ISCV_IBE_Parsing`+$TableCtr+`10" placeholder="R01"value="`+resultpdfmsh.msh_9_2_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`10" name="Expected_HL7_Parsing`+$TableCtr+`10" value="`+resultpdfmsh.msh_9_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`10" name="Expected_Value`+$TableCtr+`10" value="`+resultpdfmsh.msh_9_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`10" name="Actual_Value`+$TableCtr+`10" value="`+resultpdfmsh.msh_9_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`13" name="Pass_fail`+$TableCtr+`13" value="`+resultpdfmsh.msh_9_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`13" name="Comments`+$TableCtr+`13" value="`+resultpdfmsh.msh_9_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`13" name="Sign_off`+$TableCtr+`13" value="`+resultpdfmsh.msh_9_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Message Control ID
							</td>
							<td>
								MSH-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`11" name="ISCV_IBE_Parsing`+$TableCtr+`11"value="`+resultpdfmsh.msh_10_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`11" name="Expected_HL7_Parsing`+$TableCtr+`11" value="`+resultpdfmsh.msh_10_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`11" name="Expected_Value`+$TableCtr+`11" value="`+resultpdfmsh.msh_10_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`11" name="Actual_Value`+$TableCtr+`11" value="`+resultpdfmsh.msh_10_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`14" name="Pass_fail`+$TableCtr+`14" value="`+resultpdfmsh.msh_10_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`14" name="Comments`+$TableCtr+`14" value="`+resultpdfmsh.msh_10_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`14" name="Sign_off`+$TableCtr+`14" value="`+resultpdfmsh.msh_10_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Processing ID
							</td>
							<td>
								MSH-11
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`12" name="ISCV_IBE_Parsing`+$TableCtr+`12" placeholder="p | T | D"value="`+resultpdfmsh.msh_11_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`12" name="Expected_HL7_Parsing`+$TableCtr+`12" value="`+resultpdfmsh.msh_11_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`12" name="Expected_Value`+$TableCtr+`12" value="`+resultpdfmsh.msh_11_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`12" name="Actual_Value`+$TableCtr+`12" value="`+resultpdfmsh.msh_11_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`15" name="Pass_fail`+$TableCtr+`15" value="`+resultpdfmsh.msh_11_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`15" name="Comments`+$TableCtr+`15" value="`+resultpdfmsh.msh_11_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`15" name="Sign_off`+$TableCtr+`15" value="`+resultpdfmsh.msh_11_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Version ID
							</td>
							<td>
								MSH-12
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`13" name="ISCV_IBE_Parsing`+$TableCtr+`13" placeholder="2.4"value="`+resultpdfmsh.msh_12_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`13" name="Expected_HL7_Parsing`+$TableCtr+`13" value="`+resultpdfmsh.msh_12_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`13" name="Actual_Value`+$TableCtr+`13" value="`+resultpdfmsh.msh_12_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`13" name="Expected_Value`+$TableCtr+`13" value="`+resultpdfmsh.msh_12_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`16" name="Pass_fail`+$TableCtr+`16" value="`+resultpdfmsh.msh_12_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`16" name="Comments`+$TableCtr+`16" value="`+resultpdfmsh.msh_12_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`16" name="Sign_off`+$TableCtr+`16" value="`+resultpdfmsh.msh_12_signoff+`"/>
							</div>
							</td>
							</tr>
							</tbody>
						</table>
                ` ;


                $('#results_textTable tbody:last').before(rowString1);
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


var url2 = apiUrl+'/section10/result_txt/fetch_pid.php?prs=' + prs + '&token=' + token;
$.getJSON(url2,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_pid,function(key,resultpdfpid)
        {
                rowString2 = `
                <table class="ui celled table black unstackable" ">
                <tbody>
                <td colspan="8"> <b>PID </b></td>
							<tr>
							<td><b>Patient Identifier </b>

							</td>
							<td>
							<b>	PID-3 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`14" name="ISCV_IBE_Parsing`+$TableCtr+`14"value="`+resultpdfpid.pid_3_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`14" name="Expected_HL7_Parsing`+$TableCtr+`14" value="`+resultpdfpid.pid_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`14" name="Expected_Value`+$TableCtr+`14" value="`+resultpdfpid.pid_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`14" name="Actual_Value`+$TableCtr+`14" value="`+resultpdfpid.pid_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`17" name="Pass_fail`+$TableCtr+`17" value="`+resultpdfpid.pid_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`17" name="Comments`+$TableCtr+`17" value="`+resultpdfpid.pid_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`17" name="Sign_off`+$TableCtr+`17" value="`+resultpdfpid.pid_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID
							</td>
							<td>
								PID-3.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`15" name="ISCV_IBE_Parsing`+$TableCtr+`15" placeholder="MRN"value="`+resultpdfpid.pid_3_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`15" name="Expected_HL7_Parsing`+$TableCtr+`15" value="`+resultpdfpid.pid_3_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`15" name="Expected_Value`+$TableCtr+`15" value="`+resultpdfpid.pid_3_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`15" name="Actual_Value`+$TableCtr+`15" value="`+resultpdfpid.pid_3_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`18" name="Pass_fail`+$TableCtr+`18" value="`+resultpdfpid.pid_3_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`18" name="Comments`+$TableCtr+`18" value="`+resultpdfpid.pid_3_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`18" name="Sign_off`+$TableCtr+`18" value="`+resultpdfpid.pid_3_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td> Assigning  <br>
							  Authority
							</td>
							<td>
								PID-3.4

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`16" name="ISCV_IBE_Parsing`+$TableCtr+`16"value="`+resultpdfpid.pid_3_4_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`16" name="Expected_HL7_Parsing`+$TableCtr+`16" value="`+resultpdfpid.pid_3_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`16" name="Expected_Value`+$TableCtr+`16" value="`+resultpdfpid.pid_3_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`16" name="Actual_Value`+$TableCtr+`16" value="`+resultpdfpid.pid_3_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`19" name="Pass_fail`+$TableCtr+`19" value="`+resultpdfpid.pid_3_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`19" name="Comments`+$TableCtr+`19" value="`+resultpdfpid.pid_3_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`19" name="Sign_off`+$TableCtr+`19" value="`+resultpdfpid.pid_3_4_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Name</b>

							</td>
							<td>
							<b>	PID-5
							</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`17" name="ISCV_IBE_Parsing`+$TableCtr+`17"value="`+resultpdfpid.pid_5_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`17" name="Expected_HL7_Parsing`+$TableCtr+`17" value="`+resultpdfpid.pid_5_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`17" name="Expected_Value`+$TableCtr+`17" value="`+resultpdfpid.pid_5_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`17" name="Actual_Value`+$TableCtr+`17" value="`+resultpdfpid.pid_5_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`20" name="Pass_fail`+$TableCtr+`20" value="`+resultpdfpid.pid_5_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`20" name="Comments`+$TableCtr+`20" value="`+resultpdfpid.pid_5_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`20" name="Sign_off`+$TableCtr+`20" value="`+resultpdfpid.pid_5_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name

							</td>
							<td>
								PID-5.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`18" name="ISCV_IBE_Parsing`+$TableCtr+`18"value="`+resultpdfpid.pid_5_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`18" name="Expected_HL7_Parsing`+$TableCtr+`18" value="`+resultpdfpid.pid_5_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`18" name="Expected_Value`+$TableCtr+`18" value="`+resultpdfpid.pid_5_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`18" name="Actual_Value`+$TableCtr+`18" value="`+resultpdfpid.pid_5_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`21" name="Pass_fail`+$TableCtr+`21" value="`+resultpdfpid.pid_5_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`21" name="Comments`+$TableCtr+`21" value="`+resultpdfpid.pid_5_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`21" name="Sign_off`+$TableCtr+`21" value="`+resultpdfpid.pid_5_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name

							</td>
							<td>
								PID-5.2

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`19" name="ISCV_IBE_Parsing`+$TableCtr+`19"value="`+resultpdfpid.pid_5_2_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`19" name="Expected_HL7_Parsing`+$TableCtr+`19" value="`+resultpdfpid.pid_5_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`19" name="Expected_Value`+$TableCtr+`19" value="`+resultpdfpid.pid_5_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`19" name="Actual_Value`+$TableCtr+`19" value="`+resultpdfpid.pid_5_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`22" name="Pass_fail`+$TableCtr+`22" value="`+resultpdfpid.pid_5_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`22" name="Comments`+$TableCtr+`22" value="`+resultpdfpid.pid_5_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`22" name="Sign_off`+$TableCtr+`22" value="`+resultpdfpid.pid_5_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Middle Name

							</td>
							<td>
								PID-5.3

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`20" name="ISCV_IBE_Parsing`+$TableCtr+`20"value="`+resultpdfpid.pid_5_3_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`20" name="Expected_HL7_Parsing`+$TableCtr+`20" value="`+resultpdfpid.pid_5_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`20" name="Expected_Value`+$TableCtr+`20" value="`+resultpdfpid.pid_5_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`20" name="Actual_Value`+$TableCtr+`20" value="`+resultpdfpid.pid_5_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`23" name="Pass_fail`+$TableCtr+`23" value="`+resultpdfpid.pid_5_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`23" name="Comments`+$TableCtr+`23" value="`+resultpdfpid.pid_5_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`23" name="Sign_off`+$TableCtr+`23" value="`+resultpdfpid.pid_5_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>DOB
							</td>
							<td>
								PID-7

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`21" name="ISCV_IBE_Parsing`+$TableCtr+`21" placeholder="Format: YYYMMDD"value="`+resultpdfpid.pid_7_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`21" name="Expected_HL7_Parsing`+$TableCtr+`21" value="`+resultpdfpid.pid_7_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`21" name="Expected_Value`+$TableCtr+`21" value="`+resultpdfpid.pid_7_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`21" name="Actual_Value`+$TableCtr+`21" value="`+resultpdfpid.pid_7_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`24" name="Pass_fail`+$TableCtr+`24" value="`+resultpdfpid.pid_7_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`24" name="Comments`+$TableCtr+`24" value="`+resultpdfpid.pid_7_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`24" name="Sign_off`+$TableCtr+`24" value="`+resultpdfpid.pid_7_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Gender

							</td>
							<td>
								PID-8

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`22" name="ISCV_IBE_Parsing`+$TableCtr+`22" placeholder="F | M | U" value="`+resultpdfpid.pid_8_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`22" name="Expected_HL7_Parsing`+$TableCtr+`22" value="`+resultpdfpid.pid_8_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`22" name="Expected_Value`+$TableCtr+`22" value="`+resultpdfpid.pid_8_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`22" name="Actual_Value`+$TableCtr+`22" value="`+resultpdfpid.pid_8_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`25" name="Pass_fail`+$TableCtr+`25" value="`+resultpdfpid.pid_8_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`25" name="Comments`+$TableCtr+`25" value="`+resultpdfpid.pid_8_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`25" name="Sign_off`+$TableCtr+`25" value="`+resultpdfpid.pid_8_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Race

							</td>
							<td>
							  PID-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`23" name="ISCV_IBE_Parsing`+$TableCtr+`23" value="`+resultpdfpid.pid_10_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`23" name="Expected_HL7_Parsing`+$TableCtr+`23" value="`+resultpdfpid.pid_10_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`23" name="Expected_Value`+$TableCtr+`23" value="`+resultpdfpid.pid_10_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`23" name="Actual_Value`+$TableCtr+`23" value="`+resultpdfpid.pid_10_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`26" name="Pass_fail`+$TableCtr+`26" value="`+resultpdfpid.pid_10_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`26" name="Comments`+$TableCtr+`26" value="`+resultpdfpid.pid_10_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`26" name="Sign_off`+$TableCtr+`26" value="`+resultpdfpid.pid_10_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Address</b>

							</td>
							<td>
							<b>	PID-11 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`24" name="ISCV_IBE_Parsing`+$TableCtr+`24" value="`+resultpdfpid.pid_11_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`24" name="Expected_HL7_Parsing`+$TableCtr+`24" value="`+resultpdfpid.pid_11_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`24" name="Expected_Value`+$TableCtr+`24" value="`+resultpdfpid.pid_11_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`24" name="Actual_Value`+$TableCtr+`24" value="`+resultpdfpid.pid_11_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`27" name="Pass_fail`+$TableCtr+`27" value="`+resultpdfpid.pid_11_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`27" name="Comments`+$TableCtr+`27" value="`+resultpdfpid.pid_11_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`27" name="Sign_off`+$TableCtr+`27" value="`+resultpdfpid.pid_11_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Street Address

							</td>
							<td>
								PID-11.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`25" name="ISCV_IBE_Parsing`+$TableCtr+`25" value="`+resultpdfpid.pid_11_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`25" name="Expected_HL7_Parsing`+$TableCtr+`25" value="`+resultpdfpid.pid_11_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`25" name="Expected_Value`+$TableCtr+`25" value="`+resultpdfpid.pid_11_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`25" name="Actual_Value`+$TableCtr+`25" value="`+resultpdfpid.pid_11_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`28" name="Pass_fail`+$TableCtr+`28" value="`+resultpdfpid.pid_11_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`28" name="Comments`+$TableCtr+`28" value="`+resultpdfpid.pid_11_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`28" name="Sign_off`+$TableCtr+`28" value="`+resultpdfpid.pid_11_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Other
							  Designation

							</td>
							<td>
								PID-11.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`26" name="ISCV_IBE_Parsing`+$TableCtr+`26" value="`+resultpdfpid.pid_11_2_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`26" name="Expected_HL7_Parsing`+$TableCtr+`26" value="`+resultpdfpid.pid_11_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`26" name="Expected_Value`+$TableCtr+`26" value="`+resultpdfpid.pid_11_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`26" name="Actual_Value`+$TableCtr+`26" value="`+resultpdfpid.pid_11_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`29" name="Pass_fail`+$TableCtr+`29" value="`+resultpdfpid.pid_11_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`29" name="Comments`+$TableCtr+`29" value="`+resultpdfpid.pid_11_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`29" name="Sign_off`+$TableCtr+`29" value="`+resultpdfpid.pid_11_2_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>  City
							</td>
							<td>
								PID-11.3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`27" name="ISCV_IBE_Parsing`+$TableCtr+`27" value="`+resultpdfpid.pid_11_3_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`27" name="Expected_HL7_Parsing`+$TableCtr+`27" value="`+resultpdfpid.pid_11_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`27" name="Expected_Value`+$TableCtr+`27" value="`+resultpdfpid.pid_11_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`27" name="Actual_Value`+$TableCtr+`27" value="`+resultpdfpid.pid_11_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`30" name="Pass_fail`+$TableCtr+`30" value="`+resultpdfpid.pid_11_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`30" name="Comments`+$TableCtr+`30" value="`+resultpdfpid.pid_11_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`30" name="Sign_off`+$TableCtr+`30" value="`+resultpdfpid.pid_11_3_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>  State
							</td>
							<td>
								PID-11.4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`28" name="ISCV_IBE_Parsing`+$TableCtr+`28" value="`+resultpdfpid.pid_11_4_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`28" name="Expected_HL7_Parsing`+$TableCtr+`28" value="`+resultpdfpid.pid_11_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`28" name="Expected_Value`+$TableCtr+`28" value="`+resultpdfpid.pid_11_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`28" name="Actual_Value`+$TableCtr+`28" value="`+resultpdfpid.pid_11_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`31" name="Pass_fail`+$TableCtr+`31" value="`+resultpdfpid.pid_11_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`31" name="Comments`+$TableCtr+`31" value="`+resultpdfpid.pid_11_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`31" name="Sign_off`+$TableCtr+`31" value="`+resultpdfpid.pid_11_4_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>  Zip Code
							</td>
							<td>
								PID-11.5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`29" name="ISCV_IBE_Parsing`+$TableCtr+`29"  value="`+resultpdfpid.pid_11_5_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`29" name="Expected_HL7_Parsing`+$TableCtr+`29" value="`+resultpdfpid.pid_11_5_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`29" name="Expected_Value`+$TableCtr+`29" value="`+resultpdfpid.pid_11_5_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`29" name="Actual_Value`+$TableCtr+`29" value="`+resultpdfpid.pid_11_5_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`32" name="Pass_fail`+$TableCtr+`32" value="`+resultpdfpid.pid_11_5_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`32" name="Comments`+$TableCtr+`32" value="`+resultpdfpid.pid_11_5_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`32" name="Sign_off`+$TableCtr+`32" value="`+resultpdfpid.pid_11_5_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>Home Phone
							</td>
							<td>
								PID-13
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`30" name="ISCV_IBE_Parsing`+$TableCtr+`30"  value="`+resultpdfpid.pid_13_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`30" name="Expected_HL7_Parsing`+$TableCtr+`30" value="`+resultpdfpid.pid_13_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`30" name="Expected_Value`+$TableCtr+`30" value="`+resultpdfpid.pid_13_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`30" name="Actual_Value`+$TableCtr+`30" value="`+resultpdfpid.pid_13_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`33" name="Pass_fail`+$TableCtr+`33" value="`+resultpdfpid.pid_13_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`33" name="Comments`+$TableCtr+`33" value="`+resultpdfpid.pid_13_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`33" name="Sign_off`+$TableCtr+`33" value="`+resultpdfpid.pid_13_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>Other Phone

							</td>
							<td>
								PID-14

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`31" name="ISCV_IBE_Parsing`+$TableCtr+`31" value="`+resultpdfpid.pid_14_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`31" name="Expected_HL7_Parsing`+$TableCtr+`31" value="`+resultpdfpid.pid_14_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`31" name="Expected_Value`+$TableCtr+`31" value="`+resultpdfpid.pid_14_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`31" name="Actual_Value`+$TableCtr+`31" value="`+resultpdfpid.pid_14_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`34" name="Pass_fail`+$TableCtr+`34" value="`+resultpdfpid.pid_14_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`34" name="Comments`+$TableCtr+`34" value="`+resultpdfpid.pid_14_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`34" name="Sign_off`+$TableCtr+`34" value="`+resultpdfpid.pid_14_signoff+`"/>
							</div>
							</td>
							</tr>


							<tr>
							<td>Patient Account

							</td>
							<td>
								PID-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`32" name="ISCV_IBE_Parsing`+$TableCtr+`32" placeholder="	ISCV Study Config 4" value="`+resultpdfpid.pid_18_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`32" name="Expected_HL7_Parsing`+$TableCtr+`32" value="`+resultpdfpid.pid_18_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`32" name="Expected_Value`+$TableCtr+`32" value="`+resultpdfpid.pid_18_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`32" name="Actual_Value`+$TableCtr+`32" value="`+resultpdfpid.pid_18_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`35" name="Pass_fail`+$TableCtr+`35" value="`+resultpdfpid.pid_18_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`35" name="Comments`+$TableCtr+`35" value="`+resultpdfpid.pid_18_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`35" name="Sign_off`+$TableCtr+`35" value="`+resultpdfpid.pid_18_signoff+`"/>
							</div>
							</td>
							</tr>
							</tbody>
						</table>
                
                ` ;


                $('#results_textTable tbody:last').before(rowString2);
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





















var url3 = apiUrl+'/section10/result_txt/fetch_pv1.php.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_pv1,function(key,resultpdfpv1)
        {
                rowString3 = `
                <table class="ui celled table black unstackable" ">
                <tbody>

                <td colspan="10"> <b>PV1 </b></td>

							<tr>
							<td>Patient Class
							</td>
							<td>
								PV1-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`33" name="ISCV_IBE_Parsing`+$TableCtr+`33" placeholder="O| I | E" value="`+resultpdfpv1.pv1_2_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`33" name="Expected_HL7_Parsing`+$TableCtr+`33" value="`+resultpdfpv1.pv1_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`33" name="Expected_Value`+$TableCtr+`33" value="`+resultpdfpv1.pv1_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`33" name="Actual_Value`+$TableCtr+`33" value="`+resultpdfpv1.pv1_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`36" name="Pass_fail`+$TableCtr+`36" value="`+resultpdfpv1.pv1_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`36" name="Comments`+$TableCtr+`36" value="`+resultpdfpv1.pv1_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`36" name="Sign_off`+$TableCtr+`36" value="`+resultpdfpv1.pv1_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Patient Location
							</td>
							<td>
								PV1-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`34" name="ISCV_IBE_Parsing`+$TableCtr+`34" value="`+resultpdfpv1.pv1_3_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`34" name="Expected_HL7_Parsing`+$TableCtr+`34" value="`+resultpdfpv1.pv1_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`34" name="Expected_Value`+$TableCtr+`34" value="`+resultpdfpv1.pv1_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`34" name="Actual_Value`+$TableCtr+`34" value="`+resultpdfpv1.pv1_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`37" name="Pass_fail`+$TableCtr+`37" value="`+resultpdfpv1.pv1_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`37" name="Comments`+$TableCtr+`37" value="`+resultpdfpv1.pv1_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`37" name="Sign_off`+$TableCtr+`37" value="`+resultpdfpv1.pv1_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>ReferringDoctor</b>
							</td>
							<td>
								<b>PV1-8</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`35" name="ISCV_IBE_Parsing`+$TableCtr+`35" value="`+resultpdfpv1.pv1_8_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`35" name="Expected_HL7_Parsing`+$TableCtr+`35" value="`+resultpdfpv1.pv1_8_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`35" name="Expected_Value`+$TableCtr+`35" value="`+resultpdfpv1.pv1_8_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`35" name="Actual_Value`+$TableCtr+`35" value="`+resultpdfpv1.pv1_8_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`38" name="Pass_fail`+$TableCtr+`38" value="`+resultpdfpv1.pv1_8_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`38" name="Comments`+$TableCtr+`38" value="`+resultpdfpv1.pv1_8_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`38" name="Sign_off`+$TableCtr+`38" value="`+resultpdfpv1.pv1_8_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID Number
							</td>
							<td>
								PV1-8.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`36" name="ISCV_IBE_Parsing`+$TableCtr+`36"  value="`+resultpdfpv1.pv1_8_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`36" name="Expected_HL7_Parsing`+$TableCtr+`36" value="`+resultpdfpv1.pv1_8_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`36" name="Expected_Value`+$TableCtr+`36" value="`+resultpdfpv1.pv1_8_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`36" name="Actual_Value`+$TableCtr+`36" value="`+resultpdfpv1.pv1_8_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`39" name="Pass_fail`+$TableCtr+`39" value="`+resultpdfpv1.pv1_8_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`39" name="Comments`+$TableCtr+`39" value="`+resultpdfpv1.pv1_8_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`39" name="Sign_off`+$TableCtr+`39" value="`+resultpdfpv1.pv1_8_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name
							</td>
							<td>
								PV1-8.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`37" name="ISCV_IBE_Parsing`+$TableCtr+`37" value="`+resultpdfpv1.pv1_8_2_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`37" name="Expected_HL7_Parsing`+$TableCtr+`37" value="`+resultpdfpv1.pv1_8_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`37" name="Expected_Value`+$TableCtr+`37" value="`+resultpdfpv1.pv1_8_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`37" name="Actual_Value`+$TableCtr+`37" value="`+resultpdfpv1.pv1_8_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`40" name="Pass_fail`+$TableCtr+`40" value="`+resultpdfpv1.pv1_8_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`40" name="Comments`+$TableCtr+`40" value="`+resultpdfpv1.pv1_8_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`40" name="Sign_off`+$TableCtr+`40" value="`+resultpdfpv1.pv1_8_2_signoff+`"/>
							</div>
							</td>
							</tr>
</tbody>
						</table>
                
                ` ;


                $('#results_textTable tbody:last').before(rowString3);
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






var url4 = apiUrl+'/section10/result_txt/fetch_orc.php?prs=' + prs + '&token=' + token;
$.getJSON(url4,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_orc,function(key,resultpdforc)
        {
                rowString4 = `
<table class="ui celled table black unstackable" ">
                <tbody>
                <td colspan="10"> <b>ORC </b></td>

							<tr>
							<td>Order Control
							</td>
							<td>
								ORC-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`38" name="ISCV_IBE_Parsing`+$TableCtr+`38" placeholder="RE" value="`+resultpdforc.orc_1_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`38" name="Expected_HL7_Parsing`+$TableCtr+`38" value="`+resultpdforc.orc_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`38" name="Expected_Value`+$TableCtr+`38" value="`+resultpdforc.orc_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`38" name="Actual_Value`+$TableCtr+`38" value="`+resultpdforc.orc_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`41" name="Pass_fail`+$TableCtr+`41" value="`+resultpdforc.orc_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`41" name="Comments`+$TableCtr+`41" value="`+resultpdforc.orc_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`41" name="Sign_off`+$TableCtr+`41" value="`+resultpdforc.orc_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								ORC-3
							</td>
							<td><div class="ui form">
								<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`39" name="ISCV_IBE_Parsing`+$TableCtr+`39" placeholder="ISCV Study ID"  value="`+resultpdforc.orc_3_iscv_val+`"/>
							</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`39" name="Expected_HL7_Parsing`+$TableCtr+`39" value="`+resultpdforc.orc_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`39" name="Expected_Value`+$TableCtr+`39" value="`+resultpdforc.orc_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`39" name="Actual_Value`+$TableCtr+`39" value="`+resultpdforc.orc_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`42" name="Pass_fail`+$TableCtr+`42" value="`+resultpdforc.orc_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`42" name="Comments`+$TableCtr+`42" value="`+resultpdforc.orc_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`42" name="Sign_off`+$TableCtr+`42" value="`+resultpdforc.orc_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Order Status
							</td>
							<td>
								 ORC-5

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`40" name="ISCV_IBE_Parsing`+$TableCtr+`40"  value="`+resultpdforc.orc_5_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`40" name="Expected_HL7_Parsing`+$TableCtr+`40" value="`+resultpdforc.orc_5_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`40" name="Expected_Value`+$TableCtr+`40" value="`+resultpdforc.orc_5_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`40" name="Actual_Value`+$TableCtr+`40" value="`+resultpdforc.orc_5_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`43" name="Pass_fail`+$TableCtr+`43" value="`+resultpdforc.orc_5_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`43" name="Comments`+$TableCtr+`43" value="`+resultpdforc.orc_5_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`43" name="Sign_off`+$TableCtr+`43" value="`+resultpdforc.orc_5_csignoff+`"/>
							</div>
							</td>
							</tr>
							</tbody>
						</table>
                
                ` ;


                $('#results_textTable tbody:last').before(rowString4);
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



var url5 = apiUrl+'/section10/result_txt/fetch_obr.php?prs=' + prs + '&token=' + token;
$.getJSON(url5,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_obr,function(key,resultpdfobr)
        {
                rowString5 = `
                <table class="ui celled table black unstackable" ">
                <tbody>
                <td colspan="10"> <b>OBR </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBR-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`41" name="ISCV_IBE_Parsing`+$TableCtr+`41" value="`+resultpdfobr.obr_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`41" name="Expected_HL7_Parsing`+$TableCtr+`41" value="`+resultpdfobr.obr_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`41" name="Expected_Value`+$TableCtr+`41" value="`+resultpdfobr.obr_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`41" name="Actual_Value`+$TableCtr+`41" value="`+resultpdfobr.obr_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`44" name="Pass_fail`+$TableCtr+`44" value="`+resultpdfobr.obr_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`44" name="Comments`+$TableCtr+`44" value="`+resultpdfobr.obr_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`44" name="Sign_off`+$TableCtr+`44" value="`+resultpdfobr.obr_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Placer Order Number
							</td>
							<td>
								OBR-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`42" name="ISCV_IBE_Parsing`+$TableCtr+`42" placeholder="HIS Order ID" value="`+resultpdfobr.obr_2_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`42" name="Expected_HL7_Parsing`+$TableCtr+`42" value="`+resultpdfobr.obr_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`42" name="Expected_Value`+$TableCtr+`42" value="`+resultpdfobr.obr_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`42" name="Actual_Value`+$TableCtr+`42" value="`+resultpdfobr.obr_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`45" name="Pass_fail`+$TableCtr+`45" value="`+resultpdfobr.obr_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`45" name="Comments`+$TableCtr+`45" value="`+resultpdfobr.obr_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`45" name="Sign_off`+$TableCtr+`45" value="`+resultpdfobr.obr_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								OBR-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`43" name="ISCV_IBE_Parsing`+$TableCtr+`43" placeholder="ISCV Study ID" value="`+resultpdfobr.obr_3_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`43" name="Expected_HL7_Parsing`+$TableCtr+`43" value="`+resultpdfobr.obr_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`43" name="Expected_Value`+$TableCtr+`43" value="`+resultpdfobr.obr_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`43" name="Actual_Value`+$TableCtr+`43" value="`+resultpdfobr.obr_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`46" name="Pass_fail`+$TableCtr+`46" value="`+resultpdfobr.obr_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`46" name="Comments`+$TableCtr+`46" value="`+resultpdfobr.obr_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`46" name="Sign_off`+$TableCtr+`46" value="`+resultpdfobr.obr_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td> <b>Universal Service ID</b>
							</td>
							<td>
							<b>	OBR-4 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`44" name="ISCV_IBE_Parsing`+$TableCtr+`44" value="`+resultpdfobr.obr_4_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`44" name="Expected_HL7_Parsing`+$TableCtr+`44" value="`+resultpdfobr.obr_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`44" name="Expected_Value`+$TableCtr+`44" value="`+resultpdfobr.obr_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`44" name="Actual_Value`+$TableCtr+`44" value="`+resultpdfobr.obr_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`47" name="Pass_fail`+$TableCtr+`47" value="`+resultpdfobr.obr_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`47" name="Comments`+$TableCtr+`47" value="`+resultpdfobr.obr_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`47" name="Sign_off`+$TableCtr+`47" value="`+resultpdfobr.obr_4_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Procedure ID
							</td>
							<td>
								OBR-4.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`45" name="ISCV_IBE_Parsing`+$TableCtr+`45" value="`+resultpdfobr.obr_4_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`45" name="Expected_HL7_Parsing`+$TableCtr+`45" value="`+resultpdfobr.obr_4_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`45" name="Expected_Value`+$TableCtr+`45" value="`+resultpdfobr.obr_4_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`45" name="Actual_Value`+$TableCtr+`45" value="`+resultpdfobr.obr_4_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`48" name="Pass_fail`+$TableCtr+`48" value="`+resultpdfobr.obr_4_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`48" name="Comments`+$TableCtr+`48" value="`+resultpdfobr.obr_4_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`48" name="Sign_off`+$TableCtr+`48" value="`+resultpdfobr.obr_4_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td> Procedure
							  Description
							</td>
							<td>
								OBR-4.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`46" name="Expected_HL7_Parsing`+$TableCtr+`46" placeholder="ISCV Study Type" value="`+resultpdfobr.obr_4_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`46" name="Expected_Value`+$TableCtr+`46" value="`+resultpdfobr.obr_4_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`46" name="Actual_Value`+$TableCtr+`46" value="`+resultpdfobr.obr_4_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`49" name="Pass_fail`+$TableCtr+`49" value="`+resultpdfobr.obr_4_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`49" name="Comments`+$TableCtr+`49" value="`+resultpdfobr.obr_4_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`49" name="Sign_off`+$TableCtr+`49" value="`+resultpdfobr.obr_4_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Start Date Time
							</td>
							<td>
								OBR-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`47" name="ISCV_IBE_Parsing`+$TableCtr+`47" value="`+resultpdfobr.obr_7_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`47" name="Expected_HL7_Parsing`+$TableCtr+`47" value="`+resultpdfobr.obr_7_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`47" name="Expected_Value`+$TableCtr+`47" value="`+resultpdfobr.obr_7_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`47" name="Actual_Value`+$TableCtr+`47" value="`+resultpdfobr.obr_7_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`50" name="Pass_fail`+$TableCtr+`50" value="`+resultpdfobr.obr_7_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`50" name="Comments`+$TableCtr+`50" value="`+resultpdfobr.obr_7_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`50" name="Sign_off`+$TableCtr+`50" value="`+resultpdfobr.obr_7_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation End Date Time
							</td>
							<td>
								OBR-8
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`48" name="ISCV_IBE_Parsing`+$TableCtr+`48"  value="`+resultpdfobr.obr_8_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`48" name="Expected_HL7_Parsing`+$TableCtr+`48" value="`+resultpdfobr.obr_8_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`48" name="Expected_Value`+$TableCtr+`48" value="`+resultpdfobr.obr_8_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`48" name="Actual_Value`+$TableCtr+`48" value="`+resultpdfobr.obr_8_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`51" name="Pass_fail`+$TableCtr+`51" value="`+resultpdfobr.obr_8_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`51" name="Comments`+$TableCtr+`51" value="`+resultpdfobr.obr_8_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`51" name="Sign_off`+$TableCtr+`51" value="`+resultpdfobr.obr_8_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Ordering Physician
							</td>
							<td>
								OBR-16
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`49" name="ISCV_IBE_Parsing`+$TableCtr+`49" value="`+resultpdfobr.obr_16_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`49" name="Expected_HL7_Parsing`+$TableCtr+`49" value="`+resultpdfobr.obr_16_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`49" name="Expected_Value`+$TableCtr+`49" value="`+resultpdfobr.obr_16_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`49" name="Actual_Value`+$TableCtr+`49" value="`+resultpdfobr.obr_16_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`52" name="Pass_fail`+$TableCtr+`52" value="`+resultpdfobr.obr_16_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`52" name="Comments`+$TableCtr+`52" value="`+resultpdfobr.obr_16_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`52" name="Sign_off`+$TableCtr+`52" value="`+resultpdfobr.obr_16_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Accession Number
							</td>
							<td>
								OBR-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`50" name="ISCV_IBE_Parsing`+$TableCtr+`50" value="`+resultpdfobr.obr_18_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`50" name="Expected_HL7_Parsing`+$TableCtr+`50" value="`+resultpdfobr.obr_18_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`50" name="Expected_Value`+$TableCtr+`50" value="`+resultpdfobr.obr_18_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`50" name="Actual_Value`+$TableCtr+`50" value="`+resultpdfobr.obr_18_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`53" name="Pass_fail`+$TableCtr+`53" value="`+resultpdfobr.obr_18_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`53" name="Comments`+$TableCtr+`53" value="`+resultpdfobr.obr_18_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`53" name="Sign_off`+$TableCtr+`53" value="`+resultpdfobr.obr_18_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Order Status
							</td>
							<td>
								 OBR-20

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`51" name="ISCV_IBE_Parsing`+$TableCtr+`51" value="`+resultpdfobr.obr_20_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`51" name="Expected_HL7_Parsing`+$TableCtr+`51" value="`+resultpdfobr.obr_20_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`51" name="Expected_Value`+$TableCtr+`51" value="`+resultpdfobr.obr_20_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`51" name="Actual_Value`+$TableCtr+`51" value="`+resultpdfobr.obr_20_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`54" name="Pass_fail`+$TableCtr+`54" value="`+resultpdfobr.obr_20_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`54" name="Comments`+$TableCtr+`54" value="`+resultpdfobr.obr_20_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`54" name="Sign_off`+$TableCtr+`54" value="`+resultpdfobr.obr_20_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Report Version
							</td>
							<td>
								OBR-22
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`52" name="ISCV_IBE_Parsing`+$TableCtr+`52" value="`+resultpdfobr.obr_22_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`52" name="Expected_HL7_Parsing`+$TableCtr+`52" value="`+resultpdfobr.obr_22_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`52" name="Expected_Value`+$TableCtr+`52" value="`+resultpdfobr.obr_22_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`52" name="Actual_Value`+$TableCtr+`52" value="`+resultpdfobr.obr_22_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`55" name="Pass_fail`+$TableCtr+`55" value="`+resultpdfobr.obr_22_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`55" name="Comments`+$TableCtr+`55" value="`+resultpdfobr.obr_22_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`55" name="Sign_off`+$TableCtr+`55" value="`+resultpdfobr.obr_22_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Last Signed Date Time
							</td>
							<td>
								OBR-24
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`53" name="ISCV_IBE_Parsing`+$TableCtr+`53"value="`+resultpdfobr.obr_24_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`53" name="Expected_HL7_Parsing`+$TableCtr+`53" value="`+resultpdfobr.obr_24_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`53" name="Expected_Value`+$TableCtr+`53" value="`+resultpdfobr.obr_24_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`53" name="Actual_Value`+$TableCtr+`53" value="`+resultpdfobr.obr_24_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`56" name="Pass_fail`+$TableCtr+`56" value="`+resultpdfobr.obr_24_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`56" name="Comments`+$TableCtr+`56" value="`+resultpdfobr.obr_24_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`56" name="Sign_off`+$TableCtr+`56" value="`+resultpdfobr.obr_24_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Diagnostic Serv Sect ID
							</td>
							<td>
								OBR-25
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`53" name="ISCV_IBE_Parsing`+$TableCtr+`53" placeholder="CUS" value="`+resultpdfobr.obr_25_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`54" name="Expected_HL7_Parsing`+$TableCtr+`54" value="`+resultpdfobr.obr_25_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`54" name="Expected_Value`+$TableCtr+`54" value="`+resultpdfobr.obr_25_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`54" name="Actual_Value`+$TableCtr+`54" value="`+resultpdfobr.obr_25_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`57" name="Pass_fail`+$TableCtr+`57" value="`+resultpdfobr.obr_25_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`57" name="Comments`+$TableCtr+`57" value="`+resultpdfobr.obr_25_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`57" name="Sign_off`+$TableCtr+`57" value="`+resultpdfobr.obr_25_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Status
							</td>
							<td>
								OBR-31
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`54" name="ISCV_IBE_Parsing`+$TableCtr+`54" placeholder="	P | F | C | R | D" value="`+resultpdfobr.obr_31_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`55" name="Expected_HL7_Parsing`+$TableCtr+`55" value="`+resultpdfobr.obr_31_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`55" name="Expected_Value`+$TableCtr+`55" value="`+resultpdfobr.obr_31_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`55" name="Actual_Value`+$TableCtr+`55" value="`+resultpdfobr.obr_31_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`58" name="Pass_fail`+$TableCtr+`58" value="`+resultpdfobr.obr_31_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`58" name="Comments`+$TableCtr+`58" value="`+resultpdfobr.obr_31_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`58" name="Sign_off`+$TableCtr+`58" value="`+resultpdfobr.obr_31_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Reason for Study

							</td>
							<td>
								OBR-32

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`55" name="ISCV_IBE_Parsing`+$TableCtr+`55"  value="`+resultpdfobr.obr_32_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`56" name="Expected_HL7_Parsing`+$TableCtr+`56" value="`+resultpdfobr.obr_32_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`56" name="Expected_Value`+$TableCtr+`56" value="`+resultpdfobr.obr_32_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`56" name="Actual_Value`+$TableCtr+`56" value="`+resultpdfobr.obr_32_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`59" name="Pass_fail`+$TableCtr+`59" value="`+resultpdfobr.obr_32_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`59" name="Comments`+$TableCtr+`59" value="`+resultpdfobr.obr_32_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`59" name="Sign_off`+$TableCtr+`59" value="`+resultpdfobr.obr_32_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Principal Interpreter</b>

							</td>
							<td>
								<b>OBR-32.1.1 </b>


							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`56" name="ISCV_IBE_Parsing`+$TableCtr+`56"  value="`+resultpdfobr.obr_32_1_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`57" name="Expected_HL7_Parsing`+$TableCtr+`57" value="`+resultpdfobr.obr_32_1_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`57" name="Expected_Value`+$TableCtr+`57" value="`+resultpdfobr.obr_32_1_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`57" name="Actual_Value`+$TableCtr+`57" value="`+resultpdfobr.obr_32_1_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`60" name="Pass_fail`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`60" name="Comments`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`60" name="Sign_off`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID Number
							</td>
							<td>
								OBR-32.1.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`57" name="ISCV_IBE_Parsing`+$TableCtr+`57"  value="`+resultpdfobr.obr_32_1_2_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`58" name="Expected_HL7_Parsing`+$TableCtr+`58" value="`+resultpdfobr.obr_32_1_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`58" name="Expected_Value`+$TableCtr+`58" value="`+resultpdfobr.obr_32_1_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`58" name="Actual_Value`+$TableCtr+`58" value="`+resultpdfobr.obr_32_1_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`61" name="Pass_fail`+$TableCtr+`61" value="`+resultpdfobr.obr_32_1_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`61" name="Comments`+$TableCtr+`61" value="`+resultpdfobr.obr_32_1_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`61" name="Sign_off`+$TableCtr+`61" value="`+resultpdfobr.obr_32_1_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name
							</td>
							<td>
								OBR-32.1.3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`58" name="ISCV_IBE_Parsing`+$TableCtr+`58"  value="`+resultpdfobr.obr_32_1_3_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`59" name="Expected_HL7_Parsing`+$TableCtr+`59" value="`+resultpdfobr.obr_32_1_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`59" name="Expected_Value`+$TableCtr+`59" value="`+resultpdfobr.obr_32_1_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`59" name="Actual_Value`+$TableCtr+`59" value="`+resultpdfobr.obr_32_1_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`62" name="Pass_fail`+$TableCtr+`62" value="`+resultpdfobr.obr_32_1_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`62" name="Comments`+$TableCtr+`62" value="`+resultpdfobr.obr_32_1_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`62" name="Sign_off`+$TableCtr+`62" value="`+resultpdfobr.obr_32_1_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name
							</td>
							<td>
								OBR-32.1.4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`59" name="ISCV_IBE_Parsing`+$TableCtr+`59"  value="`+resultpdfobr.obr_32_1_4_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`60" name="Expected_HL7_Parsing`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`60" name="Expected_Value`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`60" name="Actual_Value`+$TableCtr+`60" value="`+resultpdfobr.obr_32_1_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`63" name="Pass_fail`+$TableCtr+`63" value="`+resultpdfobr.obr_32_1_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`63" name="Comments`+$TableCtr+`63" value="`+resultpdfobr.obr_32_1_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`63" name="Sign_off`+$TableCtr+`63" value="`+resultpdfobr.obr_32_1_4_signoff+`"/>
							</div>
							</td>
							</tr>
							</tbody>
						</table>
							
                
                ` ;


                $('#results_textTable tbody:last').before(rowString5);
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





var url6 = apiUrl+'/section10/result_txt/fetch_obx.php?prs=' + prs + '&token=' + token;
$.getJSON(url6,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_obx,function(key,resultpdfobx)
        {
                rowString6 = `
                <table class="ui celled table black unstackable" ">
                <tbody>
                <td colspan="10"> <b>OBX </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBX-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`61" name="ISCV_IBE_Parsing`+$TableCtr+`61" value="`+resultpdfpid.obx_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`62" name="Expected_HL7_Parsing`+$TableCtr+`62" value="`+resultpdfpid.obx_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`62" name="Expected_Value`+$TableCtr+`62" value="`+resultpdfpid.obx_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`62" name="Actual_Value`+$TableCtr+`62" value="`+resultpdfpid.obx_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`65" name="Pass_fail`+$TableCtr+`65" value="`+resultpdfpid.obx_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`65" name="Comments`+$TableCtr+`65" value="`+resultpdfpid.obx_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`65" name="Sign_off`+$TableCtr+`65" value="`+resultpdfpid.obx_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Value Type
							</td>
							<td>
								OBX-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`62" name="ISCV_IBE_Parsing`+$TableCtr+`62" placeholder="TX" value="`+resultpdfpid.obx_2_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`63" name="Expected_HL7_Parsing`+$TableCtr+`63" value="`+resultpdfpid.obx_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`63" name="Expected_Value`+$TableCtr+`63" value="`+resultpdfpid.obx_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`63" name="Actual_Value`+$TableCtr+`63" value="`+resultpdfpid.obx_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`66" name="Pass_fail`+$TableCtr+`66" value="`+resultpdfpid.obx_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`66" name="Comments`+$TableCtr+`66" value="`+resultpdfpid.obx_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`66" name="Sign_off`+$TableCtr+`66" value="`+resultpdfpid.obx_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Observation Identifier
							 </b>
							</td>
							<td>
							<b>	OBX-3 </b>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`63" name="ISCV_IBE_Parsing`+$TableCtr+`63" placeholder="ISCV Study ID" value="`+resultpdfpid.obx_3_iscv_val+`"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`64" name="Expected_HL7_Parsing`+$TableCtr+`64" value="`+resultpdfpid.obx_3_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`64" name="Expected_Value`+$TableCtr+`64" value="`+resultpdfpid.obx_3_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`64" name="Actual_Value`+$TableCtr+`64" value="`+resultpdfpid.obx_3_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`67" name="Pass_fail`+$TableCtr+`67" value="`+resultpdfpid.obx_3_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`67" name="Comments`+$TableCtr+`67" value="`+resultpdfpid.obx_3_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`67" name="Sign_off`+$TableCtr+`67" value="`+resultpdfpid.obx_3_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>   Identifier

							</td>
							<td>
							  OBX-3.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`64" name="ISCV_IBE_Parsing`+$TableCtr+`64" value="`+resultpdfpid.obx_3_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`65" name="Expected_HL7_Parsing`+$TableCtr+`65" value="`+resultpdfpid.obx_3_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`65" name="Expected_Value`+$TableCtr+`65" value="`+resultpdfpid.obx_3_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`65" name="Actual_Value`+$TableCtr+`65" value="`+resultpdfpid.obx_3_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`68" name="Pass_fail`+$TableCtr+`68" value="`+resultpdfpid.obx_3_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`68" name="Comments`+$TableCtr+`68" value="`+resultpdfpid.obx_3_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`68" name="Sign_off`+$TableCtr+`68" value="`+resultpdfpid.obx_3_1_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>    Text
							</td>
							<td>
								OBX-3.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`65" name="ISCV_IBE_Parsing`+$TableCtr+`65" value="`+resultpdfpid.obx_3_2_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`66" name="Expected_HL7_Parsing`+$TableCtr+`66" value="`+resultpdfpid.obx_3_2_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`66" name="Expected_Value`+$TableCtr+`66" value="`+resultpdfpid.obx_3_2_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`66" name="Actual_Value`+$TableCtr+`66" value="`+resultpdfpid.obx_3_2_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`69" name="Pass_fail`+$TableCtr+`69" value="`+resultpdfpid.obx_3_2_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`69" name="Comments`+$TableCtr+`69" value="`+resultpdfpid.obx_3_2_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`69" name="Sign_off`+$TableCtr+`69" value="`+resultpdfpid.obx_3_2_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Sub Identifier
							</td>
							<td>
								OBX-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`66" name="ISCV_IBE_Parsing`+$TableCtr+`66" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`67" name="Expected_HL7_Parsing`+$TableCtr+`67" placeholder="1" value="`+resultpdfpid.obx_4_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`67" name="Expected_Value`+$TableCtr+`67" value="`+resultpdfpid.obx_4_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`67" name="Actual_Value`+$TableCtr+`67" value="`+resultpdfpid.obx_4_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`70" name="Pass_fail`+$TableCtr+`70" value="`+resultpdfpid.obx_4_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`70" name="Comments`+$TableCtr+`70" value="`+resultpdfpid.obx_4_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`70" name="Sign_off`+$TableCtr+`70" value="`+resultpdfpid.obx_4_signoff+`"/>
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Value
							</td>
							<td>
								OBX-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`67" name="ISCV_IBE_Parsing`+$TableCtr+`67" value="`+resultpdfpid.obx_5_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`68" name="Expected_HL7_Parsing`+$TableCtr+`68" value="`+resultpdfpid.obx_5_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`68" name="Expected_Value`+$TableCtr+`68" value="`+resultpdfpid.obx_5_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`68" name="Actual_Value`+$TableCtr+`68" value="`+resultpdfpid.obx_5_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`71" name="Pass_fail`+$TableCtr+`71" value="`+resultpdfpid.obx_5_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`71" name="Comments`+$TableCtr+`71" value="`+resultpdfpid.obx_5_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`71" name="Sign_off`+$TableCtr+`71" value="`+resultpdfpid.obx_5_signoff+`"/>
							</div>
							</td>
							</tr>

					

							<tr>
							<td>Observation Status
							</td>
							<td>
								OBX-11

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`68" name="ISCV_IBE_Parsing`+$TableCtr+`68" placeholder="P | F | C | R | D" value="`+resultpdfpid.obx_11_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`69" name="Expected_HL7_Parsing`+$TableCtr+`69" value="`+resultpdfpid.obx_11_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`69" name="Expected_Value`+$TableCtr+`69" value="`+resultpdfpid.obx_11_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`69" name="Actual_Value`+$TableCtr+`69" value="`+resultpdfpid.obx_11_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`72" name="Pass_fail`+$TableCtr+`72" value="`+resultpdfpid.obx_11_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`72" name="Comments`+$TableCtr+`72" value="`+resultpdfpid.obx_11_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`72" name="Sign_off`+$TableCtr+`72" value="`+resultpdfpid.obx_11_signoff+`"/>
							</div>
							</td>
							</tr>
							</tbody>
						</table>
                
                ` ;


                $('#results_textTable tbody:last').before(rowString6);
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


var url7 = apiUrl+'/section10/result_txt/fetch_zds.php?prs=' + prs + '&token=' + token;
$.getJSON(url7,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_resulttext_zds,function(key,resultpdfzds)
        {
                rowString7 = `
                <table class="ui celled table black unstackable" ">
                <tbody>
                <td colspan="10"> <b> ZDS
							 </b></td>

							<tr>
							<td>Study Instance UID
							</td>
							<td>
								ZDS-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing`+$TableCtr+`69" name="ISCV_IBE_Parsing`+$TableCtr+`69" value="`+resultpdfpid.zds_1_iscv_val+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing`+$TableCtr+`70" name="Expected_HL7_Parsing`+$TableCtr+`70" value="`+resultpdfpid.zds_1_hl7_parsing+`"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value`+$TableCtr+`70" name="Expected_Value`+$TableCtr+`70" value="`+resultpdfpid.zds_1_expected_val+`"/>
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value`+$TableCtr+`70" name="Actual_Value`+$TableCtr+`70" value="`+resultpdfpid.zds_1_actual_val+`"/>
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail`+$TableCtr+`73" name="Pass_fail`+$TableCtr+`73" value="`+resultpdfpid.zds_1_pass+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments`+$TableCtr+`73" name="Comments`+$TableCtr+`73" value="`+resultpdfpid.zds_1_comments+`"/>
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off`+$TableCtr+`73" name="Sign_off`+$TableCtr+`73" value="`+resultpdfpid.zds_1_signoff+`"/>
							</div>
							</td>
							</tr>

							</tbody>
						</table>

                
                ` ;


                $('#results_textTable tbody:last').before(rowString7);
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
