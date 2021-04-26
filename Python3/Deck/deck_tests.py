from card import Card
from deck import Deck
import unittest

class CardTests(unittest.TestCase):
    def setUp(self):
        self.card = Card("Hearts", "A")

    def test_init(self):
        """cards should have a suit and value"""
        self.assertEqual(self.card.suit, "Hearts")
        self.assertEqual(self.card.value, "A")

    def test_repr(self):
        """repr should return a string of the form eck"""
        self.assertEqual(repr(self.card.value, "A of Hearts"))





