--looping statement--
--simple loop---
CLEAR screen;
DECLARE
    C NUMBER := 1;
BEGIN
    LOOP
        DBMS_OUTPUT.PUT_LINE('Welcome to PL/SQL ' || C);
        C := C + 1;
        EXIT WHEN C > 5;
    END LOOP;
END;
/
--for loop--
declare
i number;
begin
for i in 1..5
loop
dbms_output.put_line('Welcome '||i);
end loop;
end;
--reverse for loop--
declare
i number;
begin
for i in reverse 1..5
loop
dbms_output.put_line('Welcome '||i);
end loop;
end;
