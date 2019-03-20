


//Order Table

var section = '10/procedure' ;
$TableCtr=0 ;
$("#addrow_procedures").click(function()
{
        
        $TableCtr++;


        rowString = `
        <table class="ui celled table black unstackable" >

        <thead>
                                      
                                        <th colspan="2"><center>HIS Procedures</center></th>
                                        <th colspan="7"><center>ISCV Mapping Test Results</center></th>
                                        <th colspan="7"><center>HIS Report Test Results</center></th>

                                                </thead>
        <tbody>


                                                <tr>
                                                                        <th class="one wide"><center>Procedure Code</center></th>
                                                                        <th class="two wide"><center>Procedure</center></th>
                                                                        <th class="one wide"><center>ISCV Study Type</center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="two wide"><center>Comments <br></center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="one wide"><center>Report Format in HIS Accepted</center> <br>
                                                                        <th class="one wide"><center>Comments <br>
                                        Sign-Off</center></th>
                                                                </tr>
                                                                <tr>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="procedure_Code`+$TableCtr+`1" name="procedure_Code`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="Procedures`+$TableCtr+`1" name="Procedures`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Study_Type`+$TableCtr+`1" name="ISCV_Study_Type`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Test_Date`+$TableCtr+`1" name="ISCV_Test_Date`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Expectedresult`+$TableCtr+`1" name="ISCV_Expectedresult`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Actualresult`+$TableCtr+`1" name="ISCV_Actualresult`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Pass_fail`+$TableCtr+`1" name="ISCV_Pass_fail`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_accesionnumber`+$TableCtr+`1" name="ISCV_accesionnumber`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_signoff`+$TableCtr+`1" name="ISCV_signoff`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Test_Date`+$TableCtr+`1" name="HIS_Test_Date`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Expectedresult`+$TableCtr+`1" name="HIS_Expectedresult`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Actualresult`+$TableCtr+`1" name="HIS_Actualresult`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Pass_fail`+$TableCtr+`1" name="HIS_Pass_fail`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_accesionnumber`+$TableCtr+`1" name="HIS_accesionnumber`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_report`+$TableCtr+`1" name="HIS_report`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_signoff`+$TableCtr+`1" name="HIS_signoff`+$TableCtr+`1" />
                                                                        </div>
                                                                </td>
                                                        </tr>

                                </tbody>
                        </table>             `

        $('#proceduresTable').append(rowString);
        $('#TableCtr').val($TableCtr);
        $('.editField').prop('readOnly', false);
        
});

var url = apiUrl+'/section10/PROCEDURE/fetch.php?prs=' + prs + '&token=' + token;
$.getJSON(url,function(response)
{
        //Sample Messages Table
        $.each(response.testplan_procedures,function(key,procData)
        {
                
                
                rowString = `
                                <table class="ui celled table black unstackable" >

        <thead>
                                      
                                        <th colspan="2"><center>HIS Procedures</center></th>
                                        <th colspan="7"><center>ISCV Mapping Test Results</center></th>
                                        <th colspan="7"><center>HIS Report Test Results</center></th>

                                                </thead>
        <tbody>


                                                <tr>
                                                                        <th class="one wide"><center>Procedure Code</center></th>
                                                                        <th class="two wide"><center>Procedure</center></th>
                                                                        <th class="one wide"><center>ISCV Study Type</center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="two wide"><center>Comments <br></center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="one wide"><center>Report Format in HIS Accepted</center> <br>
                                                                        <th class="one wide"><center>Comments <br>
                                        Sign-Off</center></th>
                                                                </tr>
                                                                <tr>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="procedure_Code`+$TableCtr+`1" name="procedure_Code`+$TableCtr+`1" value="`+procData.his_procedure_code+`" readOnly />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="Procedures`+$TableCtr+`1" name="Procedures`+$TableCtr+`1" value="`+procData.his_procedure+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Study_Type`+$TableCtr+`1" name="ISCV_Study_Type`+$TableCtr+`1" value="`+procData.iscv_study_type+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Test_Date`+$TableCtr+`1" name="ISCV_Test_Date`+$TableCtr+`1" value="`+procData.iscv_test_date+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Expectedresult`+$TableCtr+`1" name="ISCV_Expectedresult`+$TableCtr+`1" value="`+procData.iscv_expected_value+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Actualresult`+$TableCtr+`1" name="ISCV_Actualresult`+$TableCtr+`1" value="`+procData.iscv_actual_value+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Pass_fail`+$TableCtr+`1" name="ISCV_Pass_fail`+$TableCtr+`1"  value="`+procData.iscv_pass_fail+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_accesionnumber`+$TableCtr+`1" name="ISCV_accesionnumber`+$TableCtr+`1" value="`+procData.iscv_accession_num+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_signoff`+$TableCtr+`1" name="ISCV_signoff`+$TableCtr+`1" value="`+procData.iscv_comments+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Test_Date`+$TableCtr+`1" name="HIS_Test_Date`+$TableCtr+`1" value="`+procData.his_test_date+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Expectedresult`+$TableCtr+`1" name="HIS_Expectedresult`+$TableCtr+`1" value="`+procData.his_expected_value+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Actualresult`+$TableCtr+`1" name="HIS_Actualresult`+$TableCtr+`1" value="`+procData.his_actual_value+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Pass_fail`+$TableCtr+`1" name="HIS_Pass_fail`+$TableCtr+`1" value="`+procData.his_pass_fail+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_accesionnumber`+$TableCtr+`1" name="HIS_accesionnumber`+$TableCtr+`1" value="`+procData.his_accession_num+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_report`+$TableCtr+`1" name="HIS_report`+$TableCtr+`1" value="`+procData.his_report_format+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_signoff`+$TableCtr+`1" name="HIS_signoff`+$TableCtr+`1" value="`+procData.his_signoff+`" readOnly/>
                                                                        </div>
                                                                </td>
                                                        </tr>

                                </tbody>
                        </table>   
                ` ;


                $('#proceduresTable tbody:last').before(rowString);
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

//Editable Options if AJAX Query Fails
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