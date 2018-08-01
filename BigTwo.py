# -*- coding: utf-8 -*-
"""
Created on Wed Aug  1 21:42:38 2018

@author: 0w0
"""
import random

tt = 0
while tt == 0:
    Cards = [i+j*0.1 for i in range(1,14) for j in range(4)]
    
    PlayCard = [[Cards.pop(int(random.random()*len(Cards))) for i in range(13)] for k in range(4)]
    for i in range(4):
        PlayCard[i].sort()
    
    
    #def CheckCardsPoint(PlayCard):
    PlayCardPoint = [[0 for i in range(13)]for k in range(4)]
    for k in range(4):
        for i in range(len(PlayCard[k])):
            PlayCardPoint[k][int(PlayCard[k][i])-1] += 1
                
    #def CheckPairs(PlayCard, PlayCardPoint):
    PlayCardPairs = [[] for k in range(4)]
    for k in range(4):
        for i in range(13):
            MaxNum = PlayCardPoint[k][i]
            Num_1 = 0
            Num_2 = 1
            while Num_1 < MaxNum:
                while Num_2 < MaxNum:
                    PlayCardPairs[k].append([PlayCard[k][sum(PlayCardPoint[k][0:i])+Num_1],
                                             PlayCard[k][sum(PlayCardPoint[k][0:i])+Num_2]])
                    Num_2 += 1
                Num_1 += 1
                Num_2 = Num_1 + 1
    
    #def CheckFullHouse(PlayCard, PlayCardPoint):
    PlayCardFullHouse = [[] for k in range(4)]
    for k in range(4):
        for i in range(13):
            if PlayCardPoint[k][i] >= 3:
                for l in range(13):
                    if i!=l and PlayCardPoint[k][l] >= 2:
                        MaxNum = PlayCardPoint[k][i]
                        Num_1 = 0
                        Num_2 = 1
                        Num_3 = 2
                        while Num_1 < MaxNum:
                            while Num_2 < MaxNum:
                                while Num_3 < MaxNum:
                                    testInput = []
                                    testInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+Num_1])
                                    testInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+Num_2])
                                    testInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+Num_3])
                                    MaxNum2 = PlayCardPoint[k][l]
                                    Num2_1 = 0
                                    Num2_2 = 1
                                    while Num2_1 < MaxNum2:
                                        while Num2_2 < MaxNum2:
                                            testInput2 = testInput.copy()
                                            testInput2.append(PlayCard[k][sum(PlayCardPoint[k][0:l])+Num2_1])
                                            testInput2.append(PlayCard[k][sum(PlayCardPoint[k][0:l])+Num2_2])
                                            PlayCardFullHouse[k].append(testInput2)
                                            Num2_2 += 1
                                        Num2_1 += 1
                                        Num2_2 = Num2_1 + 1
                                    Num_3 += 1
                                Num_2 += 1
                                Num_3 = Num_2 + 1
                            Num_1 += 1
                            Num_2 = Num_1 + 1
    
    #def CheckStraight(PlayCard, PlayCardPoint):
    PlayCardStraight = [[] for k in range(4)]
    for k in range(4):
        for i in range(9):
            if (PlayCardPoint[k][i] != 0 and 
                PlayCardPoint[k][i+1] != 0 and 
                PlayCardPoint[k][i+2] != 0 and 
                PlayCardPoint[k][i+3] != 0 and 
                PlayCardPoint[k][i+4] != 0):
                MaxNum1st = PlayCardPoint[k][i]
                Num1st = 0
                while Num1st < MaxNum1st:
                    StraightInput1st = []
                    StraightInput1st.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+Num1st])
                    MaxNum2nd = PlayCardPoint[k][i+1]
                    Num2nd = 0
                    while Num2nd < MaxNum2nd:
                        StraightInput2nd = StraightInput1st.copy()
                        StraightInput2nd.append(PlayCard[k][sum(PlayCardPoint[k][0:i+1])+Num2nd])
                        MaxNum3rd = PlayCardPoint[k][i+2]
                        Num3rd = 0
                        while Num3rd < MaxNum3rd:
                            StraightInput3rd = StraightInput2nd.copy()
                            StraightInput3rd.append(PlayCard[k][sum(PlayCardPoint[k][0:i+2])+Num3rd])
                            MaxNum4th = PlayCardPoint[k][i+3]
                            Num4th = 0
                            while Num4th < MaxNum4th:
                                StraightInput4th = StraightInput3rd.copy()
                                StraightInput4th.append(PlayCard[k][sum(PlayCardPoint[k][0:i+3])+Num4th])
                                MaxNum5th = PlayCardPoint[k][i+4]
                                Num5th = 0
                                while Num5th < MaxNum5th:
                                    StraightInput5th = StraightInput4th.copy()
                                    StraightInput5th.append(PlayCard[k][sum(PlayCardPoint[k][0:i+4])+Num5th])
                                    PlayCardStraight[k].append(StraightInput5th)
                                    Num5th += 1
                                Num4th += 1
                            Num3rd += 1
                        Num2nd += 1
                    Num1st += 1
                    
    #def CheckFourKind(PlayCard, PlayCardPoint):
    PlayCardFourKind = [[] for k in range(4)]
    for k in range(4):
        for i in range(13):
            if PlayCardPoint[k][i] == 4:
                for l in range(13):
                    if i!=l and PlayCardPoint[k][l] >= 1:
                        FourKindInput = []
                        FourKindInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])])
                        FourKindInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+1])
                        FourKindInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+2])
                        FourKindInput.append(PlayCard[k][sum(PlayCardPoint[k][0:i])+3])
                        MaxNum2 = PlayCardPoint[k][l]
                        Num2_1 = 0
                        while Num2_1 < MaxNum2:
                            FourKindInput2 = FourKindInput.copy()
                            FourKindInput2.append(PlayCard[k][sum(PlayCardPoint[k][0:l])+Num2_1])
                            PlayCardFourKind[k].append(FourKindInput2)
                            Num2_1 += 1         
                
                    
    #def CheckStraightFlush(PlayCard, PlayCardPoint):
    PlayCardStraightFlush = [[] for k in range(4)]
    for k in range(4):
        for i in range(len(PlayCardStraight[k])):
            if (PlayCardStraight[k][i][0]%1 == PlayCardStraight[k][i][1]%1 and
                PlayCardStraight[k][i][1]%1 == PlayCardStraight[k][i][2]%1 and
                PlayCardStraight[k][i][2]%1 == PlayCardStraight[k][i][3]%1 and
                PlayCardStraight[k][i][3]%1 == PlayCardStraight[k][i][4]%1):
                PlayCardStraightFlush[k].append(PlayCardStraight[k][i])
    
    
    
    
    
    
    tt = 1
                
                
                
                
                
                
                
                
                