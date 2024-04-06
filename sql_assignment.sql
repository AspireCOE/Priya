create table Programmer(name varchar(8) not null,dob date not null,doj date not null,sex varchar(1) not null,prof1 varchar(8),prof2 varchar(8),salary int not null);
insert into Programmer values('somdutt','1966-04-21','1992-04-21','m','pascal','basic',3200);
insert into Programmer values('devdutt','1998-04-21','2020-04-21','m','pascal','basic',3200);
insert into Programmer values('varsha','2005-01-06','2024-04-02','f','python','c',9000);
insert into Programmer values('kaviya','2000-03-15','2019-07-23','f','python','java',9000);
insert into Programmer values('sindhu','1997-09-09','2022-05-07','f','react','c',9000);
insert into Programmer values('ravi','1999-04-08','2022-05-07','m','js','angular',7900);
insert into Programmer values('adithya','1996-10-18','2018-09-13','m','js','angular',7900);
insert into Programmer values('arun','1996-01-18','2018-09-13','m','js','angular',8000);
create table Software(name varchar(8) not null,title varchar(20) not null,dev_in varchar(8) not null,scost double(7,2),dcost int,sold int);
insert into Software values('somdutt','parachute','basic',399.95,6000,43);
insert into Software values('priya','calc','pascal',568.03,6521,20);
insert into Software values('harsh','navigator','pascal',874.76,8737,17);
insert into Software values('harsh','bmi','c',546.47,3289,12);
insert into Software values('dharshu','temp_calc','c sharp',735.38,8348,9);
insert into Software values('ramesh','smart_cradle','java',655.38,8541,7);
insert into Software values('deepi','xyz','dbase',748.21,7382,3);
create table Studies(name varchar(8) not null,splace varchar(9) not null,course varchar(5) not null,ccost int not null);
insert into Studies values('somdutt','sabhari','pdgca',4500);
insert into Studies values('devdutt','bdps','dcs',5000);
select avg(scost) as avg_sellingcost from Software where dev_in='pascal';
select name,floor(datediff(current_date,dob)/365) as age from Programmer;
select Studies.name,floor(datediff(current_date,dob)/365) as age from Programmer inner join Studies on Programmer.name=Studies.name where course='dcs';
select sold,title from Software order by sold desc limit 1;
select name,dob from programmer where month(dob)=1;
select min(ccost) as low_course_fee from studies;
select count(*) as pdgca_stu from studies where course='pdgca';
select sum(scost*sold) as revenue_c from software where dev_in='c';
select * from software where name='ramesh';
select count(*) from studies where splace='sabhari';
select * from software where scost*sold >20000;
select name,title,ceil(dcost/scost) as no_copies from software;
select max(scost) as higehest_cost from software;
select * from software where scost*sold>=dcost;
select count(*) as no_dbase_packages from software where dev_in='dbase';
select count(*) from studies where splace='paragathi';
select count(*) from studies where ccost between 5000 and 10000;
select avg(ccost) as avg_course_fee from studies;
select * from programmer where prof1='c' or prof2='c';
select count(*) as no_cobol_or_pascal from programmer where prof1 in('cobol','pascal') or prof2 in('cobol','pascal');
select count(*) as num_no_pascal_c from programmer where prof1 not in('c','pascal') and prof2 not in('c','pascal');
select timestampdiff(year,dob,current_date) as age_of_oldest_male_programmer from programmer where sex='m' order by age_of_oldest_male_programmer desc limit 1;
select avg(timestampdiff(year,dob,current_date)) as avg_age_female_programmer from programmer where sex='f';
select timestampdiff(year,doj,current_date) as experience , name from programmer order by experience desc;
select name from programmer where month(dob)=month(current_date());
select count(*) no_female_programmrs from programmer where sex='f';
select prof1,prof2 from programmer where sex='m';
select avg(salary) as avg_salary from programmer;
select count(*) from programmer where salary between 2000 and 4000;
select * from programmer where prof1 not in ('clipper', 'cobol', 'pascal') and prof2 not in ('clipper', 'cobol', 'pascal');
select count(*) as no_female_programmer from programmer where sex='f' and timestampdiff(year,dob,current_date)>24 and (prof1 in('c') or prof2 in ('c'));
select name from Programmer where dayofyear(dob) BETWEEN dayofyear(current_date) AND dayofyear(date_add(current_date(),interval 7 day));
select * from programmer where timestampdiff(year,doj,current_date)<1;
select * from programmer where year(curdate())-year(doj)=2 and month(curdate())<=month(doj);
select title,(dcost-(sold*scost)) AS amount_to_recover from software where dcost>(sold * scost);
select * from software where sold=0;
select scost from software where name='marry';
select scost from software where name='priya';
select distinct splace from studies;
select count(distinct course) as no_course from studies;
select name from programmer where length(name)-length(replace(name,'a',''))=2;
select name from programmer where length(name)<=5;
select count(*) as cobol_female_programmer from programmer where sex='f' and timestampdiff(year,doj,current_date)>2 and (prof1 in('cobol') or prof2 in('cobol'));
select min(length(name)) as length_shortest_name from programmer;
select avg(dcost) as avg_dcost_cobol  from software where dev_in='cobol';
select name, sex,concat(lpad(day(dob),2,'0'), '/', lpad(month(dob),2,'0'), '/', substring(YEAR(dob), -2)) as dob,doj from Programmer;
select * from programmer where day(dob)=last_day(dob);
select sum(salary) AS total_salary_paid from programmer where sex='m' and prof1 != 'Cobol' and prof2 != 'Cobol';
select title,scost,dcost,(dcost-scost) as cost_diff from software order by cost_diff desc;
select name,dob,doj from programmer where month(dob)=month(doj);
select title from software where length(title)-length(replace(title,'_',''))>=1;
select title from software where title like '%_%';

/* queries II*/

select count(title) as no_packages ,dev_in from software group by dev_in;
select count(title) as no_packages,name from software group by name;
select count(name) as no_male_programmers from programmer where sex='m';
select count(name) as no_female_programmer from programmer where sex='f';
select dev_in,max(dcost) as costiliest_package,max(sold) as highest_selling from software group by dev_in;
select year(dob) ,count(*) as no_person_born_year from programmer group by year(dob);
select year(doj) ,count(*) as no_person_joined_year from programmer group by year(doj);
select month(dob) ,count(*) as no_person_born_month from programmer group by month(dob);
select month(doj) ,count(*) as no_person_joined_month from programmer group by month(doj);
select prof1, count(*) from programmer group by prof1;
select prof2, count(*) from programmer group by prof2;
select salary,count(*) from programmer group by salary;
select count(*) as no_ppl_institute,splace from studies group by splace;
select count(*) as no_ppl_course,course from studies group by course;
select sum(dcost) as total_dcost,dev_in from software group by dev_in;
select sum(scost*sold) as selling,dev_in from software group by dev_in;
select sum(dcost) as cost_package,name from software group by name;
select sum(scost*sold) as sales , name from software group by name;
select count(*) as no_package,name from software group by name;
select sum(scost*sold) as sales_cost,name,dev_in from software group by dev_in,name;
select min(dcost) as cheapest_package,max(dcost) as costliest_package , name from software group by name;
select dev_in, avg(dcost) as avg_dcost, avg(scost) as avg_cost,scost*sold as selling_cost,avg(scost) as avg_price_per_copy from software group by dev_in;
select splace,count(distinct course) as no_course,avg(ccost) as avg_course_fee from studies group by splace;
select splace,count(*) as no_of_students from studies group by splace;
select name,title from software;
select count(title) as no_packages,dev_in from software group by dev_in;
select count(title) as no_packages,dev_in from software where dcost<1000 group by dev_in;
select dev_in, avg(dcost-scost) as avg_difference from software group by dev_in;
select name, sum(scost) AS total_scost, dcost, dcost - (scost * sold) AS amt_to_be_recovered from software where dcost>(scost * sold) group by name;
select  max(salary) AS highest_salary,min(salary) AS lowest_salary,avg(salary) AS average_salary from programmer where salary>2000;

/* query 3*/
select name as highest_paid_c from programmer where prof1='c' or prof2='c' order by salary desc limit 1;
select name from programmer where sex='f' and (prof1='cobol' or prof2='cobol') order by salary desc limit 1;
select name,prof1,max(salary)from programmer group by prof1 having max(salary);
select name,doj from programmer order by doj desc limit 1;
select name,doj from programmer order by doj asc limit 1;
select prof1 as lang from programmer group by prof1 having count(distinct name)=1 union all select prof2 as lang from programmer group by prof2 having count(distinct name)=1; 
select name from programmer where prof1='dbase' or prof2='dbase' order by dob desc limit 1;
select splace,count(*) as no_students from studies group by splace order by no_students desc limit 1;
select name, salary from Programmer where sex='f'and salary > 3000 and (prof1 NOT IN ('C', 'C++', 'Oracle', 'Dbase')and prof2 NOT IN ('C', 'C++', 'Oracle', 'Dbase'));
select course as costiliest_course from studies order by ccost desc limit 1;
select course, count(*) AS num_students from studies group by course order by num_students desc limit 1;
select splace , course from studies where ccost<(select avg(ccost) from studies);
select splace , ccost from studies where ccost=(select max(ccost) from studies);
select course,count(*) as num_students from studies group by course having count(*)<(select avg(num_students) from(select count(*) as num_students from studies group by course) as subquery);
select course from studies where ccost between (select avg(ccost)-1000 from studies) and (select avg(ccost)+1000 from studies);
select title from software order by dcost desc limit 1;
select title from software order by (scost*sold) asc limit 1;
select name from software order by sold asc limit 1;
select dev_in from software order by (scost*sold) desc limit 1;
select sold from software order by (dcost-(scost*sold)) asc limit 1;
select title from software where dev_in='pascal' order by dcost desc limit 1;
select dev_in from software order by sold desc limit 1;
select name from software group by name order by count(*) desc limit 1;
select name as author_costliest_package from software order by dcost limit 1;
select title from software where sold<(select avg(sold) from software);
select name from programmer where sex='f' and salary>(select max(salary) from programmer where sex='m');
select prof1,count(*) as count from programmer group by prof1 order by count desc limit 1;
select name from software where (scost*sold)>=2*dcost;
SELECT dev_in AS Programming_Language, name AS Programmer_Name, title AS Cheapest_Package, dcost AS Package_Cost
FROM Software s
WHERE (dev_in, dcost) IN (
    SELECT dev_in, MIN(dcost)
    FROM Software
    GROUP BY dev_in
);
select name from programmer where sex='m' and year(dob)=1996 order by dayofyear(dob) asc limit 1;
select distinct name,title as highest_selling_packaage,dev_in from software where sold=(select max(sold) from software) union all select distinct name,title as lowest_selling_packaage,dev_in from software where sold=(select min(sold) from software);
select name from programmer where sex='f' and year(doj)=2022 order by dayofyear(doj) desc limit 1;
select year(dob),count(*) as no_programmers from programmer group by year(dob) order by no_programmers desc limit 1;
select month(doj),count(*) as no_programmers from programmer group by month(doj) order by no_programmers desc limit 1;

SELECT language, COUNT(*) AS total_programmers
FROM (
  SELECT prof1 AS language FROM programmer
  UNION ALL
  SELECT prof2 AS language FROM programmer
) AS all_languages
GROUP BY language
ORDER BY total_programmers DESC
limit 1;
select name from programmer where sex='m' and salary<(select avg(salary) from programmer where sex='f');

/* query 4*/

select * from programmer where salary in(select salary from programmer group by salary having count(*)>1);
select * from software where name in(select name from programmer where sex='m' and salary>3000);
select * from software where dev_in='pascal' and name in(select name from programmer where sex='f');
select * from programmer where doj<str_to_date('1990-01-01','yyyy-mm-dd');
select * from software where dev_in='c' and name in(select name from programmer where sex='f' and name in(select name from studies where splace='pragathi'));
select p.name,s.splace,count(s.name) as no_packages from programmer p left join studies s on p.name=s.name group by p.name,s.splace;
select s.* from software s join programmer p on s.name=p.name join studies st on s.name=st.name where s.dev_in='dbase' and p.sex='m' and st.splace=(select splace from studies group by splace order by count(*) desc limit 1);
select * from software where name in (select name from programmer where sex = 'm' and extract(year from dob) < 1965) or name in (select name from programmer where sex = 'f' and extract(year from dob) > 1975);
select * from software where dev_in not in (select prof1 from programmer);
select * from software where dev_in not in (select prof1 from programmer) and dev_in not in (select prof2 from programmer);
select * from software where name in (select name from programmer where sex = 'm' and name in(select name from studies where splace='sabhari'));
select name from programmer where name not in (select name from software);
select * from programmer where doj in (select doj from programmer group by doj having count(*) > 1);
select * from programmer where prof2 in (select prof2 from programmer group by prof2 having count(*) > 1);
select p.splace, sum(s.sold * s.scost) as total_sales_value from studies p join software s on p.name = s.name group by p.splace;
select splace from studies where name in(select name from software order by scost desc )limit 1;
select distinct p.prof1 from programmer p where p.prof1 not in (select dev_in from software) union select distinct p.prof2 from programmer p where p.prof2 not in (select dev_in from software);
select p.name,p.salary,st.course from programmer p join software s on p.name=s.name join studies st on p.name=st.name where s.scost=(select scost from software order by (scost*sold) desc limit 1);
select p.name, (s.ccost / p.salary) *12 as months_to_recover from programmer p join studies s on p.name=s.name;
select * from software where name in (select name from programmer where year(current_date()) - year(doj) < 3) order by scost desc limit 1;
select avg(salary) from programmer where name in (select name from software group by name having sum(sold * scost) > 50000);
select count(*) from software where name in (select name from studies where splace = (select splace from studies where ccost=(select min(ccost) from studies)));
/*select count(*), p.splace from software s join studies p on s.name = p.name where dcost = (select min(dcost) from software) group by p.splace;*/
select count(*) from software where name in (select name from programmer where sex = 'f' and salary > (select max(salary) from programmer where sex = 'm'));
select count(*) from software where name in (select name from studies where splace = 'bdps' and name in (select name from programmer order by doj desc));
select s.name,st.splace from software s join studies st where st.name not in (select name from software);
select p.prof1, count(*) as num_programmers, (select count(*) from software s where s.dev_in = p.prof1) as num_packages from programmer p group by p.prof1;
select p.name, count(s.name) as num_packages from programmer p left join software s on p.name = s.name group by p.name;
select p.* from programmer p join studies s on p.name=s.name where splace = 's.s.i.l.';