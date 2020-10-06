# Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

**Answer:** ทั้งสามอันเป็นการเก็บข้อมูลที่ฝั่ง browser โดย `cookie` สามารถเซ็ตค่าและเวลาหมดอายุได้จากฝั่ง server จากนั้นใน request ถัดๆไป เมื่อมีการ request ไปยัง server ก็จะแนบ cookie ติดไปด้วยทุกครั้ง เราสามารถเข้าถึง cookie ได้ผ่าน `document.cookie` แต่สามารถปิดการเข้าถึงได้ด้วยการใช้ httpOnly flag

ส่วน `localStorage` และ `sessionStorage` เป็นการเก็บข้อมูลแบบ key/value โดยสามารถเข้าถึงได้ผ่าน `window.localStorage` และ `window.sessionStorage` ตามลำดับ ความต่างคือ localStorage จะเก็บข้อมูลตลอดไปแม้จะปิด browser ไปแล้ว ส่วน sessionStorage ข้อมูลจะหายไปเมื่อปิด browser tab และข้อมูลในแต่ละแท็บก็จะแยกไม่แชร์กันข้ามแท็บ

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

**Answer:** มี error boundary ที่ยังต้องใช้ class component อยู่ เนื่องจากยังไม่มี hooks ที่เทียบเท่า lifecycle componentDidCatch ส่วนกรณีอื่นๆ เช่น การ reuse component logic สามารถใช้ react hooks จัดการแทนได้

3. Breifly describe how _Virtual DOM_ works.

**Answer:** Virtual DOM เป็นคอนเซปในการจำลอง DOM จริงเก็บไว้ใน memory โดยเก็บเฉพาะข้อมูลบางส่วนที่จำเป็นต่อการอัพเดต UI และเมื่อมีการอัพเดตข้อมูลก็จะทำใน VDOM ก่อน แล้วค่อยทำการ patch ไปยัง DOM จริงๆ ทำให้ได้ประสิทธิภาพที่ดีกว่าการ manipulate DOM จริงแบบตรงๆ

4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?

**Answer:** ใช้ **React Context** หรือ **State management** เพื่อหลีกเลี่ยงปัญหา props drilling เนื่องจาก `<App />` และ `<ComponentE />` อยู่ห่างกันค่อนข้างมาก

5. What different between using `relative` / `absolute` / `fixed` to position the element.

**Answer:**

`position: relative;` จะส่งผลให้ element ถูกจัดวางตามปกติ (normal flow) หากมีการใช้ offset (top, left, right, bottom) ตัว element จะอ้างอิง offset จากจุดเดิมที่ตัวมันเองอยู่

`position: absolute;` จะส่งผลให้ element ถูกดึงออกจาก flow ปกติ ทำให้ไม่มีการจองพื้นที่ให้กับตัว element หากมีการใช้ offset ควบคู่กันกับ parent ที่เป็น relative ก็จะอ้างอิงตามตำแหน่งของ parent นั้นๆ

`position: fixed;` ถูกดึงออกจาก flow ปกติเช่นเดียวกัน แต่ตัว offset จะอ้างอิงจากขนาดของหน้าจอ (viewport)

6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

**Answer:**

`callback` เป็นการส่ง function เป็น parameter เข้าไปยังอีก function เพื่อให้กลับมาเรียกใช้ทีหลังหลังจากทำงานบางอย่างเสร็จได้

`Promise` เป็นการจัดการ async task โดยสามารถ resolve ค่าในกรณีที่ทำงานสำเร็จ หรือ reject ในกรณีไม่สำเร็จได้

ฝั่งคนที่เรียกใช้สามารถเข้าถึงข้อมูลได้ผ่าน `.then` และจัดการ error ได้ผ่าน `.catch`

ข้อดีอีกอย่างคือสามารถ chain promise ได้ ทำให้แก้ปัญหา callback hell ได้

`async await` เป็นวิธีการจัดการ async task เช่นกัน ภายใต้ function ที่มี keyword async และใช้ await หน้า function ที่คืนค่าเป็น promise สามารถจัดการ error ได้ด้วย try/catch

ส่วนใหญ่แล้วไม่ค่อยได้ใช้ callback เนื่องจากสามารถซ้อนกันได้ทำให้มีโอกาสเกิด callback hell ได้
