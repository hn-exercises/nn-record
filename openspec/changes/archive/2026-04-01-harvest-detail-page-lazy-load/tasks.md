## 1. Timeline 鎳掑姞杞藉寮?

- [x] 1.1 鍦?`Timeline` 缁勪欢涓柊澧?`lazy`锛坆oolean锛岄粯璁?false锛夊拰 `pageSize`锛坣umber锛岄粯璁?20锛変袱涓?props
- [x] 1.2 鍦?`Timeline` 鍐呴儴鏂板 `visibleCount` 鐘舵€侊紝鍒濆鍊间负 `pageSize`锛涘綋 `lazy=false` 鏃剁洿鎺ユ覆鏌撳叏閮ㄦ暟鎹?
- [x] 1.3 瀵逛紶鍏ョ殑 `groups` 鎸?`visibleCount` 杩涜鍒囩墖锛堟寜鏉＄洰鏁拌€岄潪鍒嗙粍鏁帮級锛屼粎娓叉煋鍓?`visibleCount` 鏉¤褰?
- [x] 1.4 鍦ㄦ覆鏌撳垪琛ㄥ簳閮ㄦ坊鍔犲摠鍏靛厓绱?`<div ref={sentinelRef}>`锛屼娇鐢?`IntersectionObserver` 鐩戝惉鍏惰繘鍏ヨ鍙?
- [x] 1.5 鍝ㄥ叺杩涘叆瑙嗗彛鏃讹紝灏?`visibleCount` 澧炲姞 `pageSize`锛涘綋鎵€鏈夋暟鎹凡娓叉煋瀹屾瘯鏃?disconnect observer
- [x] 1.6 娣诲姞鍔犺浇鐘舵€?UI锛氭湭鍏ㄩ儴鍔犺浇鏃舵樉绀?鍔犺浇涓?.."锛堝甫 CSS 鍔ㄧ敾锛夛紝鍏ㄩ儴鍔犺浇瀹屾瘯鏃舵樉绀?宸插叏閮ㄥ姞杞?馃帀"
- [x] 1.7 鍦?`App.css` 涓坊鍔?`.timeline__loader` 鍜?`.timeline__end` 鏍峰紡锛堝眳涓€佹贰鑹叉枃瀛椼€侀€傚綋闂磋窛锛?

## 2. 鏂板 HarvestDetail 椤甸潰

- [x] 2.1 鍒涘缓 `src/pages/HarvestDetail.jsx`锛屼娇鐢?`useParams` 鑾峰彇 habitId锛屼粠 `habitStorage` 鍔犺浇涔犳儻鏁版嵁
- [x] 2.2 瀹炵幇涔犳儻涓嶅瓨鍦ㄦ椂鐨勭┖鐘舵€佹彁绀?+ 杩斿洖鎸夐挳
- [x] 2.3 瀹炵幇涔犳儻鎽樿鍗＄墖鍖哄煙锛氬悕绉般€佸骇鍙抽摥銆佸紑濮嬫棩鏈熴€佺疮璁℃墦鍗℃鏁般€佷粖鏃ユ墦鍗＄姸鎬侊紙澶嶇敤 `checkinStorage` API锛?
- [x] 2.4 瀹炵幇鎿嶄綔鎸夐挳鍖哄煙锛氱紪杈戞寜閽紙寮瑰嚭 `HabitForm`锛夈€佸垹闄ゆ寜閽紙寮瑰嚭纭瀵硅瘽妗嗭級
- [x] 2.5 瀹炵幇鍒犻櫎纭閫昏緫锛氱‘璁ゅ悗璋冪敤 `removeHabit` + `removeCheckins`锛岀劧鍚?`navigate('/harvest')`
- [x] 2.6 瀹炵幇缂栬緫閫昏緫锛氭彁浜ゅ悗璋冪敤 `updateHabit`锛屽埛鏂伴〉闈㈡暟鎹?
- [x] 2.7 闆嗘垚 Timeline 缁勪欢锛坄lazy={true}`锛夛紝浼犲叆 `getCheckinsWithNotes(habitId)` 鍜?`habit.color`
- [x] 2.8 瀹炵幇椤甸潰椤堕儴"鈫?杩斿洖鏀惰幏闆?鎸夐挳锛岀偣鍑诲悗 `navigate('/harvest')`

## 3. 璺敱娉ㄥ唽

- [x] 3.1 鍦?`src/router.jsx` 涓?import `HarvestDetail` 骞舵柊澧?`{ path: 'harvest/:id', element: <HarvestDetail /> }` 璺敱鏉＄洰

## 4. 姒傝鍗＄墖绠€鍖?

- [x] 4.1 鍦?`HabitOverviewList.jsx` 涓紩鍏?`useNavigate`锛岀Щ闄?`expandedId`銆乣toggleExpand`銆乣editHabit`銆乣confirmDeleteId` 绛夌姸鎬佸拰瀵瑰簲鐨?handler
- [x] 4.2 灏嗗崱鐗?`onClick` 浠?`toggleExpand(habit.id)` 鏀逛负 `navigate('/harvest/${habit.id}')`
- [x] 4.3 绉婚櫎鍗＄墖灞曞紑鍚庣殑 `overview-detail` 鍖哄煙锛堝唴宓?Timeline + 缂栬緫/鍒犻櫎鎸夐挳锛?
- [x] 4.4 绉婚櫎 `HabitOverviewList` 鍐呴儴鐨勭紪杈戝脊绐楀拰鍒犻櫎纭瀵硅瘽妗嗕唬鐮?
- [x] 4.5 绉婚櫎涓嶅啀闇€瑕佺殑 import锛歚Timeline`銆乣HabitForm`銆乣updateHabit`銆乣removeHabit`銆乣removeCheckins`銆乣getCheckinsWithNotes`
- [x] 4.6 涓哄崱鐗囨坊鍔犲鑸紩瀵艰瑙夋彁绀猴紙鍙崇澶?icon 鎴?chevron锛夛紝鏆楃ず鍙偣鍑昏烦杞?

## 5. 鏍峰紡

- [x] 5.1 鍦?`App.css` 涓柊澧?`.harvest-detail` 椤甸潰鍩虹甯冨眬鏍峰紡
- [x] 5.2 鏂板 `.harvest-detail__header`锛堣繑鍥炴寜閽?+ 鎿嶄綔鎸夐挳鍖哄煙锛夋牱寮?
- [x] 5.3 鏂板 `.harvest-detail__card`锛堜範鎯憳瑕佸崱鐗囷級鏍峰紡锛屽鐢?glassmorphism 鍙橀噺
- [x] 5.4 鏂板 `.harvest-detail__stats`锛堢粺璁℃暟瀛楀尯鍩燂級鏍峰紡
- [x] 5.5 鏂板 `.harvest-detail__timeline-section`锛堟椂闂寸嚎鍖哄煙锛夋牱寮?
- [x] 5.6 鏇存柊 `.overview-card` 鏍峰紡锛氱Щ闄?`.is-expanded` 鐩稿叧鏍峰紡锛屾坊鍔?chevron / 鐐瑰嚮寮曞鎬?

## 6. 楠岃瘉

- [x] 6.1 `npx vite build` 纭 0 閿欒
- [x] 6.2 鎵嬪姩楠岃瘉锛氭敹鑾烽泦姒傝鍗＄墖鐐瑰嚮鍚庤烦杞?`/harvest/:id` 璇︽儏椤?
- [x] 6.3 鎵嬪姩楠岃瘉锛氳鎯呴〉鏄剧ず涔犳儻淇℃伅銆佹搷浣滄寜閽€佹噿鍔犺浇鏃堕棿绾?
- [x] 6.4 鎵嬪姩楠岃瘉锛歍imeline 鎳掑姞杞解€斺€旈灞忎粎娓叉煋绾?20 鏉★紝婊氬姩瑙﹀簳鑷姩鍔犺浇鏇村锛岀粓鎬佹樉绀?宸插叏閮ㄥ姞杞?馃帀"
- [x] 6.5 鎵嬪姩楠岃瘉锛氳鎯呴〉缂栬緫鍜屽垹闄ゅ姛鑳芥甯稿伐浣?
- [x] 6.6 鎵嬪姩楠岃瘉锛氫範鎯笉瀛樺湪鏃剁殑绌虹姸鎬侀〉闈㈡纭睍绀?
- [x] 6.7 鎵嬪姩楠岃瘉锛氭湭璁剧疆 `lazy` 鐨?Timeline锛堝 HabitDetail 椤碉級琛屼负涓嶅彈褰卞搷
