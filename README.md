I was shocked to know one line of my code will optimize the application this much.

and the line is "**changeDetection: ChangeDetectionStrategy.OnPush**" refer child component ts file for this code snippet.

to know how this line of code is impacting in the application optimizations. please comment this code snippet and run the application and open console. as shown in below child component rendered more times which is not required.
![image](https://github.com/user-attachments/assets/b065fa8e-abc4-42aa-a3ea-a032fe91aeb0).

as my application incrementing the counter value on button click. try clicking on the button and observe the console. for each click child component is rendering again and again unnecessarily
![image](https://github.com/user-attachments/assets/d8eca263-4b39-468e-adf6-9fcba4a8e2f7)

so here whenever parent properties or variables change happening (for e.g. in our case counter variable). its child component is identifying the change detection and re rendering the component.

to avoid this use **changeDetection: ChangeDetectionStrategy.OnPush** in child component.ts. default value for changeDetection is set ChangeDetectionStrategy.Default.



Hope you understand this concept !!!!!!!!!!

