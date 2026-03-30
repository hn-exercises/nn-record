## 1. 鎵撳崱鏁版嵁妯″瀷鍗囩骇锛坈heckinStorage v2锛?

- [x] 1.1 閲嶆瀯 checkinStorage.js锛歳ecords[habitId] 浠庢棩鏈熷瓧绗︿覆鏁扮粍鏀逛负鏃堕棿鎴虫暟缁勶紝version 鍗囩骇涓?2
- [x] 1.2 瀹炵幇 v1鈫抳2 鑷姩杩佺Щ閫昏緫锛氭娴?version=1 鏃讹紝灏嗘棩鏈熷瓧绗︿覆杞崲涓哄綋澶?12:00:00 鐨勬椂闂存埑
- [x] 1.3 淇敼 checkin() 鍑芥暟锛氫笉鍐嶆寜鏃ユ湡鍘婚噸锛屾瘡娆¤皟鐢ㄨ拷鍔?Date.now() 鏃堕棿鎴?
- [x] 1.4 淇敼 isCheckedIn() 鈫?getTodayCount(habitId)锛氳繑鍥炰粖鏃ユ墦鍗℃鏁拌€岄潪甯冨皵鍊?
- [x] 1.5 淇敼 getCheckinCount() 杩斿洖鎬绘椂闂存埑鏁伴噺锛堟鏁拌€岄潪澶╂暟锛?
- [x] 1.6 鏂板 removeCheckinByTimestamp(habitId, timestamp)锛氬垹闄ゆ寚瀹氭椂闂存埑鐨勬墦鍗¤褰?
- [x] 1.7 鏂板 getCheckinsByDate(habitId, dateStr)锛氳繑鍥炴寚瀹氭棩鏈熺殑鎵€鏈夋椂闂存埑
- [x] 1.8 鏂板 getAllCheckinDates()锛氳繑鍥?{ [date]: string[] }锛堟棩鏈熲啋棰滆壊鏁扮粍锛夌敤浜庢棩鍘嗗鑹叉笎鍙樻爣璁?

## 2. 搴曢儴瀵艰埅涓庤矾鐢遍噸鏋?

- [x] 2.1 鏇存柊 BottomNav.jsx锛氫笁涓?Tab锛堜粖鏃ヨ 馃幆 /銆佹椂鍏夎ˉ 馃搮 /backfill銆佹敹鑾烽泦 馃弳 /harvest锛?
- [x] 2.2 鏇存柊 router.jsx锛氭柊澧?/backfill 鍜?/harvest 璺敱锛岀Щ闄ゆ棫 /habit/calendar 璺敱
- [x] 2.3 鏇存柊 App.css 搴曢儴瀵艰埅鏍峰紡锛氶€傞厤涓?Tab 甯冨眬

## 3. 浠婃棩璁伴椤垫洿鏂帮紙HabitHome锛?

- [x] 3.1 鏇挎崲 isCheckedIn 璋冪敤涓?getTodayCount锛屼範鎯崱鐗囨樉绀恒€屼粖鏃?N 娆°€?
- [x] 3.2 绉婚櫎鎵撳崱鎸夐挳鐨?disabled 鐘舵€侊紝姣忔鐐瑰嚮閮藉彲鎵撳崱
- [x] 3.3 鍗＄墖搴曢儴鏄剧ず銆岀疮璁?N 娆°€嶆浛浠ｅ師鏈夌殑澶╂暟缁熻

## 4. 鏃跺厜琛ラ〉闈㈤噸鏋勶紙HabitCalendar锛?

- [x] 4.1 淇敼 Calendar 缁勪欢锛歮arkedDates 浠?{ [date]: string } 鏀逛负 { [date]: string[] }锛屾覆鏌?linear-gradient 澶氳壊娓愬彉
- [x] 4.2 涔犳儻閫夋嫨鍣ㄧЩ鍒版棩鍘嗕笅鏂癸紝鎸夐挳澧炲ぇ锛屼娇鐢ㄤ範鎯鑹叉祬鑹茶儗鏅?
- [x] 4.3 閫変腑鏃ユ湡鍚庝笅鏂瑰睍绀鸿鏃ユ墍鏈夋墦鍗¤褰曞垪琛紙涔犳儻鍚?鎵撳崱鏃堕棿锛?
- [x] 4.4 姣忔潯璁板綍澧炲姞鍒犻櫎鎸夐挳锛岃皟鐢?removeCheckinByTimestamp 瀹炵幇鍒犲崱
- [x] 4.5 琛ュ崱鏃惰褰曚负鎵€閫夋棩鏈?12:00:00 鐨勬椂闂存埑
- [x] 4.6 鏇存柊 App.css 涓ˉ鍗￠〉闈㈢浉鍏虫牱寮忥紙閫夋嫨鍣ㄤ笅绉汇€佽褰曞垪琛ㄣ€佸垹闄ゆ寜閽級

## 5. 鏃堕棿杞撮€傞厤鏃堕棿鎴筹紙Timeline锛?

- [x] 5.1 Timeline 缁勪欢鎺ユ敹鏃堕棿鎴虫暟缁勬浛浠ｆ棩鏈熷瓧绗︿覆鏁扮粍
- [x] 5.2 鎸夋棩鏈熷垎缁勫睍绀猴紝缁勫唴鎸夋椂闂村€掑簭锛屾瘡鏉℃樉绀?HH:mm
- [x] 5.3 杩佺Щ鏁版嵁锛?2:00 鏃堕棿鎴筹級鐗规畩澶勭悊锛氫粎鏄剧ず鏃ユ湡鎴栨爣璁颁负"琛ュ崱"

## 6. 鎾掕姳鏁堟灉鏇存柊锛圕onfetti锛?

- [x] 6.1 HabitHome 绉婚櫎姣忔棩涓€娆￠檺鍒讹紝姣忔鎵撳崱閮借Е鍙?fireConfetti()
- [x] 6.2 纭 HabitDetail 鍜?HabitCalendar 鎵撳崱/琛ュ崱鏃跺潎瑙﹀彂鎾掕姳

## 7. 鏀惰幏闆嗙粺璁￠〉闈紙HarvestHome锛?

- [x] 7.1 鍒涘缓 src/pages/HarvestHome.jsx 椤甸潰妗嗘灦
- [x] 7.2 瀹炵幇鐑姏鍥剧粍浠讹紙SVG锛夛細鍏ㄥ勾鏃ュ巻缃戞牸锛屾寜澶╄仛鍚堟墦鍗℃鏁版槧灏勯鑹叉繁娴?
- [x] 7.3 瀹炵幇瓒嬪娍鎶樼嚎鍥剧粍浠讹紙SVG锛夛細鏈€杩?30 澶╂瘡澶╂墦鍗℃鏁?
- [x] 7.4 瀹炵幇涔犳儻鍗犳瘮鐜舰鍥剧粍浠讹紙SVG锛夛細鍚勪範鎯墦鍗℃鏁板崰姣旓紝浣跨敤涔犳儻鑷€夎壊
- [x] 7.5 缁勫悎涓変釜鍥捐〃鍒?HarvestHome锛屾坊鍔犳爣棰樺拰璇存槑鏂囧瓧
- [x] 7.6 娣诲姞 App.css 涓敹鑾烽泦椤甸潰鐩稿叧鏍峰紡

## 8. 娓旇幏妯″潡锛團ishingCatch锛?

- [x] 8.1 鍒涘缓 src/utils/fishingInsight.js锛歠etchInsight() 寮傛鎺ュ彛锛?+ 绉嶆ā鏉垮彞寮忥紝闅忔満濉厖鐪熷疄鎵撳崱鏁版嵁
- [x] 8.2 鍒涘缓 src/components/FishingCatch.jsx锛氬簳閮ㄦ粦鍏ュ崱鐗囩粍浠讹紝鍚?emoji銆佹枃鏈€佸叧闂寜閽?
- [x] 8.3 瀹炵幇 CSS 鍔ㄧ敾锛?00ms 搴曢儴婊戝叆锛坋ase-out锛夛紝3 绉掕嚜鍔ㄦ敹璧?
- [x] 8.4 鍦?HarvestHome 搴曢儴娣诲姞銆岎煄?娓旇幏銆嶆寜閽紝闆嗘垚 FishingCatch 缁勪欢

## 9. 鏋勫缓楠岃瘉涓庢敹灏?

- [x] 9.1 杩愯 vite build 纭闆堕敊璇浂璀﹀憡
- [x] 9.2 楠岃瘉 v1鈫抳2 鏁版嵁杩佺Щ閫昏緫姝ｇ‘鎬?
- [x] 9.3 妫€鏌ユ墍鏈夎矾鐢卞鑸甯搞€佷笁 Tab 鍒囨崲鏃犲紓甯?

