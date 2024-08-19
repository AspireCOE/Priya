--DML Operation in Anonymous Block--
create table customer(
cust_id number(6),
cust_name varchar2(30),
dob date,
mobile number(10),
address varchar2(100)
);
--rename column name--
alter table customer rename COLUMN  mpbile to mobile;
desc customer;

set SERVEROUTPUT ON; --to see result in script window
clear screen; --to clear past result and fresh window
declare
v_cust_name varchar2(30);
v_mobile varchar2(30);
v_address varchar2(30);

begin
 --insert--
insert into customer (CUST_ID,cust_name,dob,mobile,address) values
(10000,'Arun',to_date('09/12/1992','mm/dd/yyyy'),9090809090,'Chennai');

insert into customer values
(10001,'Kanna',to_date('09/02/1992','mm/dd/yyyy'),8154909090,'Chennai');
insert into customer (CUST_ID,cust_name,dob,mobile) values
(10002,'Rathi',to_date('12/12/1993','mm/dd/yyyy'),9096701090);
commit;
Dbms_output.put_line('Value Inserted');

--update--
update customer set address='Hydrabad' where cust_id=10002;
COMMIT;
Dbms_output.put_line('Value Updated');

--delete--
delete from customer where cust_id=10001;
COMMIT;
Dbms_output.put_line('Value deleted');

--select--
select cust_name,mobile,address into v_cust_name,V_mobile,v_address from customer where cust_id=10002;
Dbms_output.put_line('Select statement executed');
Dbms_output.put_line('Customers are listed below');
Dbms_output.put_line('Customer Mobile Number:'||v_mobile);
Dbms_output.put_line('Customer Name:'||v_cust_name);
Dbms_output.put_line('Customer address:'||v_address);

end;
/  

select * from customer;