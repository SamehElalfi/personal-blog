---
title: أهم عناصر النصوص في HTML5
authors: sameh
---

# عناصر النصوص في HTML5

يوجد عدد من العناصر التي تساعد مطوري المواقع على وصف النصوص بشكل أوضح ومن هذه العناصر:

- العنصر _&lt;u>_ إختصار لكلمة underline لوضع خطط أسفل نص معين
- العنصر _&lt;b>_ اختصار لكلمة bold لجعل نص معين ثخين
- العنصر _&lt;strong>_ يعمل على تحديد نص معين على أنه نص مهم important، وله نفس تأثير العناصر &lt;b> على النص، مثال "_هذا المنتج غير متوفر في دولتك الحالية، ولا يمكن شحنه إليك في الوقت الحالي_".
- العنصر _&lt;i>_ اختصار لكلمة italic أي مائل، يستخدم لعرض أسماء شخصيات خيالية، مثال :"The _Queen Mary_ sailed last night" (اسم سفينة)، أو لتحديد كلمة معينة غريبة عن سياق النص مثل الكلمات العلمية. مثال "The word _the_ is an article".
- العنصر _&lt;em>_ اختصار لكلمة emphasis ويستخدم للتأكيد على جزء معين من النص، مثال "_بمجرد تسجيلك فأنت توافق على شروط الموقع_"، أو الكلمات التي تستخدم نبرة مختلفة، مثال "فقط أفعالها!" أو "يجب أن نفعل شيئًا بهذا الخصوص على الفور!".
- العنصر *&lt;cite> *يستخدم لعرض عناوين الأعمال الإبداعية (الكتب، الأفلام، الموسيقى، الألعاب، البرامج، المقالات أو المسرحيات.. إلخ).
- العنصر _&lt;del>_ إختصار لكلمة delete ويستخدم لعرض جزء من النص تم حذف سابقًا (أو تغييره).
- العنصر *&lt;ins> *إختصار لكلمة inserted ويستخدم لعرض محتوى نصي جديد تمت إضافته مؤخرًا وتستعمله (والعنصر del) محركات البحث لفهم كيف تغير محتوى الصفحة بمرور الوقت.

ملاحظة: كلا العنصرين del و ins لهما الخاصية datetime والتي تحتوي على وقت حدوث هذا التعديل، ويجب أن يتبع هذا الوقت أحد الأشكال التالية:

```javascript
1993-11-01
1986-01-28T11:38:00.01
1986-01-28 11:38:00.010
```

كما يمكن أن تحتوي هذه العناصر على الخاصية cite والتي تقبل رابط تشعبي الصفحة التي تحتوي تفاصيل هذا التغير.

## مصادر ومراجع

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
- [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content)
