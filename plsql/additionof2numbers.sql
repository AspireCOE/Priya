
begin
dbms_output.put_line('Welcome to PL/SQL ');
end;

--add two numbers--
declare
n1 number(6):=10;
n2 number(6):=20; --:= for equal to
begin
dbms_output.put_line('The addition of 2 numbers:'||(n1+n2)); --|| for concat
end;
show user;