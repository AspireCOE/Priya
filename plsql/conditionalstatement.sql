--conditional statement
-- if,the,else
--syntax for if
--if condition then
--statement;
--end if;

--syntax for if/else
--if condition then
--  statement;
--else
-- else-statement;
--end if;
--
--syntax for elseif
--if condition then
--statement;
--elsif condition then 
-- statement;
--elsif condition then
-- statement;
--else
--  else-statement;
--end if; 
CREATE TABLE Employees (
    emp_id NUMBER PRIMARY KEY,
    emp_name VARCHAR2(50),
    doj DATE,
    salaray number(6)
);
alter table Employees rename column salaray to salary;
INSERT INTO Employees (emp_id,emp_name,doj,salary)
VALUES (1, 'John', TO_DATE('2023-01-15', 'YYYY-MM-DD'),8000);
INSERT INTO Employees (emp_id,emp_name,doj,salary)
VALUES (2, 'Doe', TO_DATE('2022-01-05', 'YYYY-MM-DD'),12000);

select * from employees;
select doj,mod(to_number(to_char(doj,'yyyy')),4) from employees;
 
declare 
a number:=10;
b number:=20;
begin
if a>b then
dbms_output.put_line(a||' is greater than '||b);
 else
 dbms_output.put_line(b||' is greater than '||a);
 end if;
 end;
 /
 
 
 declare
 v_employee_id number:=&emp_id;
 v_doj number(4);
 begin
 select to_number(to_char(doj,'yyyy')) into v_doj from employees
 where emp_id=v_employee_id;
 if mod(v_doj,4)=0 then
 dbms_output.put_line('The doj '||v_doj||' of employee_id ' ||v_employee_id ||' is leap year');
 else
 dbms_output.put_line('The doj '||v_doj||' of employee_id '|| v_employee_id ||' is non-leap year');
 end if;
 end;
 /
 