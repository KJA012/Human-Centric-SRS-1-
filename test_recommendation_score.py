"""
Test suite for calculate_recommendation_score function
Tests the Human-Centric SRS recommendation scoring algorithm
"""

import unittest
from unittest.mock import Mock, patch


def get_technical_serendipity(content):
    """Mock implementation - returns a score between 0.0 and 1.0"""
    return 0.7


def check_human_authorship(content):
    """Mock implementation - returns human authorship index between 0.0 and 1.0"""
    return 0.8


class User:
    """Mock user object"""
    def __init__(self, anti_bubble_active=False, slider_value=0.5):
        self.anti_bubble_slider_active = anti_bubble_active
        self.slider_value = slider_value


def calculate_recommendation_score(content, user=None):
    """Calculate recommendation score with human-centric bias"""
    srs_score = get_technical_serendipity(content)  # 기존 우연성 점수
    human_index = check_human_authorship(content)  # 인간 서사 지수 (0.0 ~ 1.0)
    
    alpha = 0.5  # 플랫폼 상생 가중치 기본값
    
    # 유저가 플랫폼에서 '안티-버블 슬라이더'를 올렸을 때 작동
    if user and user.anti_bubble_slider_active == True:
        alpha = user.slider_value * 1.5 
        
    # 최종 점수 계산 (본인이 제안한 공식 구현)
    final_score = srs_score * (1 + alpha * human_index)
    
    return final_score


class TestRecommendationScore(unittest.TestCase):
    """Test cases for recommendation score calculation"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.test_content = {"title": "Test Content", "body": "Test body"}
    
    def test_basic_score_calculation(self):
        """Test basic score calculation without anti-bubble slider"""
        user = User(anti_bubble_active=False)
        score = calculate_recommendation_score(self.test_content, user)
        
        # Expected: 0.7 * (1 + 0.5 * 0.8) = 0.7 * 1.4 = 0.98
        expected = 0.7 * (1 + 0.5 * 0.8)
        self.assertAlmostEqual(score, expected, places=5)
        print(f"✓ Basic score test passed: {score}")
    
    def test_anti_bubble_slider_active(self):
        """Test score calculation with anti-bubble slider active"""
        user = User(anti_bubble_active=True, slider_value=0.8)
        score = calculate_recommendation_score(self.test_content, user)
        
        # Expected: 0.7 * (1 + (0.8 * 1.5) * 0.8) = 0.7 * (1 + 0.96) = 0.7 * 1.96 = 1.372
        alpha = 0.8 * 1.5
        expected = 0.7 * (1 + alpha * 0.8)
        self.assertAlmostEqual(score, expected, places=5)
        print(f"✓ Anti-bubble slider test passed: {score}")
    
    def test_maximum_alpha_boost(self):
        """Test with maximum slider value (1.0)"""
        user = User(anti_bubble_active=True, slider_value=1.0)
        score = calculate_recommendation_score(self.test_content, user)
        
        # Expected: 0.7 * (1 + 1.5 * 0.8) = 0.7 * 2.2 = 1.54
        alpha = 1.0 * 1.5
        expected = 0.7 * (1 + alpha * 0.8)
        self.assertAlmostEqual(score, expected, places=5)
        print(f"✓ Maximum alpha boost test passed: {score}")
    
    def test_minimum_alpha_boost(self):
        """Test with minimum slider value (0.0)"""
        user = User(anti_bubble_active=True, slider_value=0.0)
        score = calculate_recommendation_score(self.test_content, user)
        
        # Expected: 0.7 * (1 + 0 * 0.8) = 0.7 * 1 = 0.7
        alpha = 0.0 * 1.5
        expected = 0.7 * (1 + alpha * 0.8)
        self.assertAlmostEqual(score, expected, places=5)
        print(f"✓ Minimum alpha boost test passed: {score}")
    
    def test_no_user_provided(self):
        """Test calculation when no user object is provided"""
        score = calculate_recommendation_score(self.test_content, user=None)
        
        # Expected: 0.7 * (1 + 0.5 * 0.8) = 0.98
        expected = 0.7 * (1 + 0.5 * 0.8)
        self.assertAlmostEqual(score, expected, places=5)
        print(f"✓ No user provided test passed: {score}")
    
    def test_score_range(self):
        """Test that scores remain within reasonable range"""
        # Test with high human index
        with patch('__main__.check_human_authorship', return_value=1.0):
            with patch('__main__.get_technical_serendipity', return_value=1.0):
                user = User(anti_bubble_active=True, slider_value=1.0)
                score = calculate_recommendation_score(self.test_content, user)
                # Should not exceed unreasonable bounds
                self.assertGreater(score, 0)
                self.assertLess(score, 10)
                print(f"✓ Score range test passed: {score}")


if __name__ == '__main__':
    print("=" * 60)
    print("Running Human-Centric SRS Recommendation Score Tests")
    print("=" * 60)
    unittest.main(verbosity=2)
