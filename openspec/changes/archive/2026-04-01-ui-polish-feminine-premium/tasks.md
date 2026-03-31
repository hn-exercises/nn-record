## 1. 瑙嗚涓婚浣撶郴锛圕SS 鍙橀噺涓庡叏灞€鑳屾櫙锛?

- [x] 1.1 鍦?`index.css` `:root` 涓柊澧炴笎鍙樺彉閲?`--gradient-page`锛?60deg 娣＄矇鈫掓贰绱啋娣¤摑锛?
- [x] 1.2 鏂板 `--gradient-card`锛?35deg 鍗婇€忔槑鐧芥笎鍙橈級
- [x] 1.3 鏂板鐜荤拑鎷熸€佸彉閲?`--glass-blur: blur(20px)`銆乣--glass-border: 1px solid rgba(255,255,255,0.5)`
- [x] 1.4 鏂板涓夌骇闃村奖鍙橀噺 `--shadow-soft`銆乣--shadow-medium`銆乣--shadow-glow`
- [x] 1.5 鏂板缂撳姩鍙橀噺 `--ease-bounce: cubic-bezier(0.34,1.56,0.64,1)`銆乣--ease-smooth: cubic-bezier(0.4,0,0.2,1)`
- [x] 1.6 鍦?`index.css` body 涓缃?`background: var(--gradient-page); background-attachment: fixed`
- [x] 1.7 娣诲姞 `@supports not (backdrop-filter: blur(1px))` 闄嶇骇瑙勫垯
- [x] 1.8 娣诲姞 `::selection` 浼厓绱犺嚜瀹氫箟閫変腑鑹诧紙鍝佺墝绮夊崐閫忔槑锛?
- [x] 1.9 娣诲姞 WebKit 鑷畾涔夋粴鍔ㄦ潯鏍峰紡锛?px 鍦嗚銆佸搧鐗岃壊鍗婇€忔槑 thumb锛?

## 2. 瀛椾綋涓庢帓鐗堢郴缁?

- [x] 2.1 鍦?`index.html` `<head>` 涓坊鍔?Google Fonts `<link>` 寮曞叆 Nunito锛?00/600/700锛宒isplay=swap锛?
- [x] 2.2 鏇存柊 `index.css` `:root` 鐨?`font-family` 涓?`'Nunito', 'SF Pro Rounded', 'PingFang SC', system-ui, sans-serif`
- [x] 2.3 鏇存柊鍏ㄥ眬 `line-height` 涓?1.6锛堟鏂囷級锛宧1 琛岄珮 1.2
- [x] 2.4 涓鸿緟鍔╂枃瀛楃被锛坙abel/hint/caption锛夋坊鍔?`letter-spacing: 0.02em`
- [x] 2.5 涓哄ぇ鍙锋暟瀛楁坊鍔?`letter-spacing: -0.02em`

## 3. 涓绘寜閽笎鍙?

- [x] 3.1 淇敼 `.btn--primary` 鑳屾櫙涓?`linear-gradient(135deg, var(--dopamine-pink), var(--dopamine-coral))`
- [x] 3.2 娣诲姞 `.btn--primary:hover` 娓愬彉瑙掑害寰皟锛堝 120deg锛変骇鐢熸祦鍔ㄦ劅
- [x] 3.3 涓?`.btn--primary` 娣诲姞 `position: relative; overflow: hidden` 涓烘稛婕晥鏋滃仛鍑嗗
- [x] 3.4 娣诲姞 `.btn--primary::after` 娑熸吉浼厓绱?+ `@keyframes ripple` 鍔ㄧ敾

## 4. 搴曢儴瀵艰埅閲嶈璁?

- [x] 4.1 鍦?`BottomNav.jsx` 涓垱寤轰笁涓唴鑱?SVG 鍥炬爣缁勪欢锛堥澏蹇?鏃ュ巻/濂栨澂锛夛紝24脳24 viewBox锛宻troke 椋庢牸
- [x] 4.2 鏇挎崲鍘?emoji 涓?SVG 鍥炬爣锛岃缃粯璁?stroke 涓?`currentColor`
- [x] 4.3 娣诲姞 `.bottom-nav__dot` active 鎬佸渾鐐规寚绀哄櫒 DOM 鍏冪礌
- [x] 4.4 鍦?App.css 涓坊鍔?`.bottom-nav__dot` 鏍峰紡锛?px 鍝佺墝鑹插渾鐐?+ scale 鍏ュ満鍔ㄦ晥锛?
- [x] 4.5 鏇存柊 `.bottom-nav` 鑳屾櫙涓虹幓鐠冩嫙鎬侊紙鍗婇€忔槑鐧?+ backdrop-filter + 涓婅竟缂樻煍鍜岄槾褰憋級
- [x] 4.6 鏇存柊闈炴縺娲?Tab 瀛楅噸涓?500锛屾縺娲讳负 700
- [x] 4.7 绉婚櫎鏃х殑 `.bottom-nav__icon` emoji font-size 瑙勫垯

## 5. 涔犳儻鍗＄墖瑙嗚澧炲己

- [x] 5.1 淇敼 `.habit-tile` 鑳屾櫙涓虹幓鐠冩嫙鎬侊紙鍗婇€忔槑鐧?+ backdrop-filter blur锛?
- [x] 5.2 娣诲姞涔犳儻鑹插乏渚ц楗版潯锛?px 瀹芥笎鍙樻潯锛岄€氳繃 `::before` 浼厓绱犲疄鐜帮級
- [x] 5.3 鍦嗚鏀逛负 24px锛屾洿鏂伴槾褰变负 `var(--shadow-soft)`锛宧over 鏃?`var(--shadow-medium)`
- [x] 5.4 hover 寰綅绉荤粺涓€涓?`translateY(-2px)`锛屼娇鐢?`var(--ease-smooth)` 杩囨浮
- [x] 5.5 涓?`.habit-tile--add` 娣诲姞 `@keyframes breathe` 铏氱嚎鍛煎惛鍔ㄦ晥锛坥pacity 0.4鈫?锛?s 寰幆锛?
- [x] 5.6 鍦?`HabitHome.jsx` 涓哄崱鐗囨坊鍔?stagger 鍏ュ満 CSS锛坄animation-delay` 鍩轰簬 index锛?

## 6. 鎵撳崱寮圭獥锛圕heckinModal锛夊崌绾?

- [x] 6.1 淇敼 CheckinModal.jsx 缁撴瀯锛氬皢宸︿晶鑹叉潯鏀逛负椤堕儴娓愬彉妯箙锛坄checkin-modal__gradient-bar`锛?
- [x] 6.2 鏇存柊寮圭獥鑳屾櫙涓虹幓鐠冩嫙鎬佹牱寮?
- [x] 6.3 鎵撳崱鎸夐挳鏀圭敤娓愬彉鑳屾櫙锛堝鐢?`.btn--primary` 娓愬彉锛?
- [x] 6.4 textarea 鐒︾偣鎬佹坊鍔犲搧鐗岃壊鏌斿拰鍏夋檿 box-shadow
- [x] 6.5 寮圭獥鍏ュ満鍔ㄦ晥鏀圭敤 `--ease-bounce` 寮规€х缉鏀?

## 7. 鏃ュ巻缃戞牸缇庡寲

- [x] 7.1 淇敼 `.calendar` 鑳屾櫙涓虹幓鐠冩嫙鎬?
- [x] 7.2 淇敼 `.is-selected` 鏍峰紡涓哄搧鐗岃壊鍏夋檿 box-shadow + 缂╂斁锛堟浛浠ｇ畝鍗曟弿杈癸級
- [x] 7.3 娣诲姞 `.is-today` 鑴夊啿鐜姩鏁堬紙`@keyframes pulse-ring`锛?s 寰幆锛屽搧鐗岃壊鍗婇€忔槑鎵╂暎锛?
- [x] 7.4 淇敼 Calendar.jsx 涓?`getMarkStyle` 閫昏緫锛氭湁鏍囪鏃ユ湡鍦ㄦ暟瀛椾笅鏂规覆鏌撳僵鑹插皬鍦嗙偣锛?-4px锛?
- [x] 7.5 鍦?Calendar.jsx 涓负鍗曞厓鏍兼坊鍔?`<span className="calendar__dots">` 瀛愬厓绱犵粨鏋?
- [x] 7.6 鍦?App.css 涓坊鍔?`.calendar__dots` 鍜?`.calendar__dot` 鏍峰紡锛堝眳涓帓鍒楀皬鍦嗙偣锛?

## 8. 琛ㄥ崟涓庤緭鍏ユ帶浠跺崌绾?

- [x] 8.1 淇敼 `.habit-form__field input` 娣诲姞鍐呴槾褰憋紙`inset 0 2px 4px rgba(0,0,0,0.04)`锛?
- [x] 8.2 淇敼鐒︾偣鎬?box-shadow 涓哄搧鐗岃壊鏌斿拰鍏夋檿
- [x] 8.3 杈撳叆妗嗗渾瑙掔‘淇濅负 14px
- [x] 8.4 淇敼 `.color-swatch.is-active` 涓哄脊鎬х缉鏀撅紙scale 1.2锛? 鐧借壊澶栫幆 + 鍝佺墝鑹查槾褰卞厜鏅?
- [x] 8.5 `.habit-form` 鍗＄墖鑳屾櫙鏀逛负鐜荤拑鎷熸€?

## 9. 绌虹姸鎬佹彃鐢诲寮?

- [x] 9.1 淇敼 `HabitHome.jsx` 鏃犱範鎯椂鏄剧ず emoji 鏋勫浘锛堭煂扁湪锛? 寮曞鏂囨"寮€濮嬩綘鐨勭涓€涓皬涔犳儻鍚?
- [x] 9.2 淇敼 `Timeline.jsx` 绌虹姸鎬佹樉绀?馃摑馃挮 + "璁板綍浣犵殑绗竴涓冻杩?
- [x] 9.3 淇敼 `HabitOverviewList.jsx` 绌虹姸鎬佹樉绀?馃弳馃寛 + "娣诲姞涔犳儻鍚庯紝杩欓噷浼氬睍绀轰綘鐨勬垚灏?
- [x] 9.4 淇敼 `HabitCalendar.jsx` 绌烘棩鏈熸彁绀烘樉绀?馃搮鉁?+ "杩欏ぉ杩樻病鏈夋墦鍗¤褰?
- [x] 9.5 鍦?App.css 涓粺涓€绌虹姸鎬佹牱寮忥細emoji 鍖?2.5rem銆佸鍣?40px padding銆佽櫄绾垮渾瑙掕竟妗?

## 10. 椤甸潰鏍囬瑁呴グ

- [x] 10.1 涓轰粖鏃ヨ鏍囬娣诲姞瑁呴グ emoji 鎴?CSS 灏忓浘褰?
- [x] 10.2 涓烘椂鍏夎ˉ鏍囬娣诲姞瑁呴グ鍏冪礌
- [x] 10.3 涓烘敹鑾烽泦鏍囬娣诲姞瑁呴グ鍏冪礌
- [x] 10.4 鍦?App.css 涓坊鍔犳爣棰樿楗板厓绱犳牱寮?

## 11. 寰氦浜掍笌鍔ㄦ晥浣撶郴

- [x] 11.1 瀹氫箟 `@keyframes fade-up`锛坥pacity 0鈫? + translateY 12px鈫?锛?
- [x] 11.2 瀹氫箟 `@keyframes pulse-ring`锛堝搧鐗岃壊鎵╂暎鐜紝2s 寰幆锛?
- [x] 11.3 瀹氫箟 `@keyframes breathe`锛坥pacity 0.4鈫?锛?s 寰幆锛?
- [x] 11.4 瀹氫箟 `@keyframes ripple`锛堟稛婕墿鏁ｏ紝400ms锛?
- [x] 11.5 涓?`.app-layout__content` 娣诲姞椤甸潰鍐呭娣″叆鍔ㄧ敾锛坒ade-in 200ms锛?
- [x] 11.6 缁熶竴鎵€鏈夌粍浠?transition 浣跨敤 `var(--ease-smooth)` 鎴?`var(--ease-bounce)`
- [x] 11.7 涓哄脊绐楀叆鍦猴紙`@keyframes modal-in`锛夋洿鏂颁负浣跨敤 `--ease-bounce` 缂撳姩

## 12. 鏀惰幏闆嗗浘琛ㄤ笌 Timeline 瑙嗚鍗囩骇

- [x] 12.1 淇敼 `.harvest-chart` 鑳屾櫙涓虹幓鐠冩嫙鎬?
- [x] 12.2 淇敼 `.inline-fishing` 鑳屾櫙涓虹幓鐠冩嫙鎬?+ 淇濈暀娓愬彉瑁呴グ
- [x] 12.3 淇敼 Timeline 杞寸嚎涓烘笎鍙樿壊锛坄.timeline__line` 浣跨敤 linear-gradient 涓婃繁涓嬫祬锛?
- [x] 12.4 淇敼 Timeline 鑺傜偣鍦嗙偣涓虹幆褰㈡晥鏋滐紙鐧借壊鍐呭湀 + 褰╄壊澶栫幆锛?
- [x] 12.5 淇敼 `.overview-card` 鑳屾櫙涓虹幓鐠冩嫙鎬?

## 13. 楠岃瘉涓庢敹灏?

- [x] 13.1 鎵ц `vite build` 纭 0 閿欒
- [x] 13.2 鍦ㄦ祻瑙堝櫒涓€愰〉妫€鏌ヤ笁涓?Tab 鐨勮瑙夋晥鏋?
- [x] 13.3 妫€鏌?backdrop-filter 闄嶇骇鍦ㄦ棤鏀寔鐜涓嬬殑琛ㄧ幇
- [x] 13.4 妫€鏌ユ墍鏈夊姩鏁堟椂闀?鈮?300ms锛堟稛婕?400ms 闄ゅ锛夛紝涓嶆嫋娌?
- [x] 13.5 纭鎵€鏈?CSS 鍙橀噺琚纭紩鐢紝鏃犵‖缂栫爜鍊兼畫鐣?
