/**
 * CANVA TUTORIAL GLOBAL CONFIGURATION
 * 
 * 관리자/강사 전용 설정 파일입니다.
 * 튜토리얼 01~07의 공개 여부(true: 공개중 / false: 🔒 비공개)를 여기서 지정하면
 * 스마트폰, PC, 카카오톡/네이버 브라우저 등 링크로 접속하는 모든 수강생 기기에 동일하게 적용됩니다.
 */
window.CANVA_CONFIG = {
    // 공개 상태 설정 (true: 공개중, false: 비공개)
    openStates: {
        'tutorial-1': true,  // 01 그리드, 프레임 & 글씨효과
        'tutorial-2': true,  // 02 POP 글씨 홍보물
        'tutorial-3': false, // 03 디지털아트 & 목업 3가지
        'tutorial-4': false, // 04 특수 미러링 효과 상세페이지
        'tutorial-5': false, // 05 재밌는 스탑모션 영상
        'tutorial-6': false, // 06 돈버는 디지털 워크시트지
        'tutorial-7': false  // 07 캔바 AI로 작품 5개+
    },

    // 관리자 제어판 비밀번호
    adminPasscode: '106406'
};
