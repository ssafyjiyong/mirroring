# 플라스크 rest-api 생성
from flask import Flask, request
from flask_cors import CORS
## 서버 띄우고 접속 허용
from length import *

app = Flask(__name__)
# 보안관련
CORS(app)

@app.route("/predict" , methods=["GET", "POST"])
# @app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST": 
            filename = 'card4.jpg'
            ori_img = cv2.imread(filename)
            resize_img = cv2.resize(ori_img, dsize=(640, 480), interpolation=cv2.INTER_AREA)
            
            
            global checkpnt
            global new_contour
            global vertex
            checkpnt = 0
            src = []  # 명함 영역 꼭지점의 좌표
            # grab_cut()
            # wait()
            # edge_detection(grab_cut())
            # wait()
            cv2.imshow('original_img', resize_img)
            # wait()
            edged = edge_detection(resize_img)
            # wait()
            vertex = contours(edged, resize_img, src)
            # wait()
            if checkpnt == 0:
                transformation(resize_img, src)
                print("여기야")
            else:
                pts = new_contour
                transformationGrab(resize_img, pts)
                dots = order_dots(pts)
                a, b, c, d = dots
                print("dots 타입: " + dots)

            
            message = {
                "name" : int(vertex[0][0])
            }

            return message
    if request.method == "GET":
            message = {
                "name" : "get요청"
            }
            return message
@app.route("/predict2" , methods=["GET", "POST"])
def predict2():
    if request.method == "POST":
            message = {
                "name" : "post요청 2"
            }
            return message

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=50)  # debug=True causes Restarting with stat