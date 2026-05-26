# Human-Centric-SRS-1-
본 프로젝트는 &lt;다빈치가 된 알고리즘> 시대의 '창의성 자동화'가 초래하는 유저의 디지털 불안과  플랫폼 양면 시장의 붕괴(인간 창작자 도태)를 해결하기 위해 고안되었습니다.  기존의 기술적 우연성 추천 시스템(SRS)을 고도화하여, 인간 고유의 '불완전한 서사(결핍, 노고)'를  수학적으로 우대하는 메커니즘을 제공합니다.
def calculate_recommendation_score(content):
    srs_score = get_technical_serendipity(content)  # 기존 우연성 점수
    human_index = check_human_authorship(content)  # 인간 서사 지수 (0.0 ~ 1.0)
    
    alpha = 0.5  # 플랫폼 상생 가중치 기본값
    
    # 유저가 플랫폼에서 '안티-버블 슬라이더'를 올렸을 때 작동
    if user.anti_bubble_slider_active == True:
        alpha = user.slider_value * 1.5 
        
    # 최종 점수 계산 (본인이 제안한 공식 구현)
    final_score = srs_score * (1 + alpha * human_index)
    
    return final_score
