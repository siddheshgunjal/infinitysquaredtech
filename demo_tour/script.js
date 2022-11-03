TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "label": "drone1",
  "thumbnailUrl": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_t.jpg",
  "class": "Panorama",
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541, this.camera_0E8139E2_1249_7785_41AD_6441520DE694); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C9F09C4F_C282_8111_41A0_4E5B4B4304EF",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_0_HS_1_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.41,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -60.01,
        "hfov": 6.15
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_0_HS_1_0.png",
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 70
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.41,
        "yaw": -60.01,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.15
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A, this.camera_0E98C9DA_1249_7784_41AF_010C8D5A638A); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C95A396B_C281_8311_41DE_7A49ABAC8785",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_0_HS_0_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.56,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -121.51,
        "hfov": 6.15
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_0_HS_0_0.png",
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 70
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.56,
        "yaw": -121.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.15
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_r_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_f_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_b_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_u_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_d_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_l_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_t.jpg"
   }
  ],
  "id": "panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844",
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 100,
     "label": "drone2",
     "thumbnailUrl": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_t.jpg",
     "class": "Panorama",
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844, this.camera_094247A9_1249_7B84_4181_07FDF6266ADE); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_CDCFAF6C_C286_FF16_41B1_7A8166CC10B2",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_0_HS_0_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.31,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 60.44,
           "hfov": 6.15
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_0_HS_0_0.png",
              "height": 70,
              "class": "ImageResourceLevel",
              "width": 70
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.31,
           "yaw": 60.44,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.15
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_r_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_f_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_b_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_u_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_d_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_l_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_t.jpg"
      }
     ],
     "id": "panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844",
       "backwardYaw": -121.51,
       "class": "AdjacentPanorama",
       "yaw": 60.44,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": 60.44,
    "class": "AdjacentPanorama",
    "yaw": -121.51,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 100,
     "label": "drone3",
     "thumbnailUrl": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_t.jpg",
     "class": "Panorama",
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844, this.camera_0BCF7578_1249_7C84_416E_3F8E27DC713E); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_CD1A66E4_C287_8116_41D6_9BEBD0F92D81",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_0_HS_0_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 110.68,
           "hfov": 6.15
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_0_HS_0_0.png",
              "height": 70,
              "class": "ImageResourceLevel",
              "width": 70
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0,
           "yaw": 110.68,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.15
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_r_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_f_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_b_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_u_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_d_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_l_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_t.jpg"
      }
     ],
     "id": "panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844",
       "backwardYaw": -60.01,
       "class": "AdjacentPanorama",
       "yaw": 110.68,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": 110.68,
    "class": "AdjacentPanorama",
    "yaw": -60.01,
    "distance": 1
   }
  ],
  "hfovMin": 60,
  "partial": false,
  "pitch": 0
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": "this.IconButton_025CB321_124B_5484_4195_95C0C6F01E89",
  "preloadEnabled": false,
  "buttonZoomOut": "this.IconButton_DF10E394_D157_0776_41C9_43D644960AB3",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "buttonZoomIn": "this.IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation"
 },
 {
  "id": "panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -12.01,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -91.21
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A",
 {
  "id": "panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541",
 {
  "id": "panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 110,
  "label": "exterior1",
  "thumbnailUrl": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_t.jpg",
  "class": "Panorama",
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831, this.camera_093F1849_1249_7484_4194_B4D72E8150B6); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E0797746_C281_8F12_41E2_7F77890D62E2",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_11_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -89.57,
        "hfov": 10.03
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_11_0.png",
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 116
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.71,
        "yaw": -89.57,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.03
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_09D6D872_1249_7484_41A6_851DE86515D2); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E148BEE5_C282_8116_41E3_855DD5AEE2EF",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_10_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.02,
        "hfov": 5.38
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_10_0.png",
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 61
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.83,
        "yaw": -0.02,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.38
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_0937483C_1249_74FC_41A1_14250FAC94E3); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E75CB31D_C283_8736_41E6_707A9CB4C14E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_9_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.9,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.04,
        "hfov": 2.67
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_9_0.png",
           "height": 19,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.9,
        "yaw": -0.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.67
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_092F0864_1249_748C_417B_EBC135AF4681); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E15575FD_C282_82F6_41DB_C53B9C1B18F4",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_8_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 20
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.66,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -179.13,
        "hfov": 2.7
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_8_0.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.66,
        "yaw": -179.13,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9, this.camera_09270857_1249_748C_41AA_D11B58D5A81C); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E1C3AAFE_C281_86F2_41BA_6531492F4945",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_7_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 21
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -143.06,
        "hfov": 2.49
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_0_HS_7_0.png",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 28
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.69,
        "yaw": -143.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.49
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_r_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_f_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_u_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_d_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_b_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_l_hq.jpeg",
       "height": 1296,
       "class": "ImageResourceLevel",
       "width": 1296
      },
      {
       "url": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_t.jpg"
   }
  ],
  "id": "panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 110,
     "label": "exterior3",
     "thumbnailUrl": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_t.jpg",
     "class": "Panorama",
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_0BC36560_1249_7C84_4186_FBE5156AC374); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E177C09D_C281_8136_41E1_AE0CF418B4A4",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_5_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 20
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.36,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.61,
           "hfov": 4.67
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_5_0.png",
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 53
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.36,
           "yaw": -179.61,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.67
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677, this.camera_0BDF8558_1249_7C84_419D_03C958FC0E29); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E7909655_C283_8136_41D1_276BBB00C513",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_4_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 24
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.8,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.98,
           "hfov": 2.58
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_4_0.png",
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 29
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.8,
           "yaw": -179.98,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2.58
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_0BD7C547_1249_7C8C_4169_1609AADEA2DE); this.mainPlayList.set('selectedIndex', 11)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E6932945_C282_8316_41C3_C33B1F877FBF",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_3_0_0_map.gif",
              "height": 11,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.14,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.7,
           "hfov": 1.42
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_3_0.png",
              "height": 11,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.14,
           "yaw": -179.7,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 1.42
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2, this.camera_0BDBD550_1249_7C85_4185_8E285056BB8C); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E1573CE5_C281_8116_41E0_869BB1F34682",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_2_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 20
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.87,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -87.91,
           "hfov": 4.2
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_2_0.png",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 48
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.87,
           "yaw": -87.91,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.2
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59, this.camera_0BD4753E_1249_7CFD_419B_FC221B100CFA); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E64B1A96_C28E_8132_41C0_7A2A5FCDC47D",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_1_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 21
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.94,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -97.31,
           "hfov": 2.08
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_1_0.png",
              "height": 17,
              "class": "ImageResourceLevel",
              "width": 23
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.94,
           "yaw": -97.31,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2.08
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831, this.camera_0BD25536_1249_7C8C_41A6_4AA463D61CC1); this.mainPlayList.set('selectedIndex', 12)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_E61F7475_C28F_81F6_41DD_754E810F9EC0",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_0_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 24
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.06,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -165.17,
           "hfov": 2.36
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_0_HS_0_0.png",
              "height": 17,
              "class": "ImageResourceLevel",
              "width": 26
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.06,
           "yaw": -165.17,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2.36
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_r_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_f_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_b_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_u_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_d_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_l_hq.jpeg",
          "height": 1296,
          "class": "ImageResourceLevel",
          "width": 1296
         },
         {
          "url": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_t.jpg"
      }
     ],
     "id": "panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 110,
        "label": "1_door",
        "thumbnailUrl": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_t.jpg",
        "class": "Panorama",
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_0879E67E_1249_7D7C_41A8_CCD575C2A000); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EFC77BE6_C281_8712_41CF_F16F849F6BBF",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_4_0_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 23
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.85,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 15.01,
              "hfov": 2.73
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_4_0.png",
                 "height": 21,
                 "class": "ImageResourceLevel",
                 "width": 31
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.85,
              "yaw": 15.01,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 2.73
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_086F969F_1249_7DBB_419A_0F7E51CFFE3F); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EC519F5E_C286_9F32_41E4_5731B67B59DE",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_3_0_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 22
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.82,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 28.76,
              "hfov": 4.63
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_3_0.png",
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 53
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.82,
              "yaw": 28.76,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.63
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677, this.camera_0864968E_1249_7D9C_41B0_A5189572B385); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EF670AC6_C287_8112_41CB_EEA367240A13",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_2_0_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 19
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.03,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 90.47,
              "hfov": 9.31
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_2_0.png",
                 "height": 92,
                 "class": "ImageResourceLevel",
                 "width": 111
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.03,
              "yaw": 90.47,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.31
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_086A0696_1249_7D8C_41AD_AA98860FB70C); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EE3C55AE_C286_8312_41B6_25DBA2D7ABD9",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_1_0_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 21
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -5.71,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 162.39,
              "hfov": 3.22
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_1_0.png",
                 "height": 27,
                 "class": "ImageResourceLevel",
                 "width": 36
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -5.71,
              "yaw": 162.39,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 3.22
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A, this.camera_087F0686_1249_7D8C_41A6_4700EE1E9778); this.mainPlayList.set('selectedIndex', 13)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EF606D9E_C281_8332_41E6_79B561D654BD",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_0_0_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.95,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -88.61,
              "hfov": 13.14
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_0_HS_0_0.png",
                 "height": 151,
                 "class": "ImageResourceLevel",
                 "width": 151
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.95,
              "yaw": -88.61,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.14
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_r_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_f_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_b_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_u_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_d_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_l_hq.jpeg",
             "height": 1296,
             "class": "ImageResourceLevel",
             "width": 1296
            },
            {
             "url": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_t.jpg"
         }
        ],
        "id": "panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
          "backwardYaw": -165.17,
          "class": "AdjacentPanorama",
          "yaw": 15.01,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 110,
           "partial": false,
           "label": "2_hallway",
           "thumbnailUrl": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_t.jpg",
           "class": "Panorama",
           "mapLocations": [
            {
             "y": 734.27,
             "angle": 91.39,
             "class": "PanoramaMapLocation",
             "map": {
              "scaleMode": "fit_outside",
              "image": {
               "levels": [
                {
                 "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A.png",
                 "height": 922,
                 "class": "ImageResourceLevel",
                 "width": 1536
                },
                {
                 "grayscale": true,
                 "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_lq.png",
                 "height": 461,
                 "class": "ImageResourceLevel",
                 "width": 768
                }
               ],
               "class": "ImageResource"
              },
              "label": "ground_floor",
              "thumbnailUrl": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_t.png",
              "fieldOfViewOverlayInsideColor": "#FFFFFF",
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "fieldOfViewOverlayOutsideColor": "#000000",
              "class": "Map",
              "minimumZoomFactor": 1,
              "maximumZoomFactor": 2,
              "overlays": [
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_11.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 718.48,
                 "height": 40,
                 "y": 714.27,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 13)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_D97D0F6D_C400_A240_41DD_51C56F1FFC67",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 714.43,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_11_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 718.59
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_12.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 721.32,
                 "height": 40,
                 "y": 521.75,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 14)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_D917E38D_C400_62C1_41E2_4B4F5C0187D0",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 521.8,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_12_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 721.48
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_13.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 624.62,
                 "height": 40,
                 "y": 519.78,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 15)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DA7CCFCD_C400_6241_41E5_2633E4B03E5A",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 519.89,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_13_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 624.79
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_14.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 722.47,
                 "height": 40,
                 "y": 334.09,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 16)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DB46B67C_C41F_E247_41E3_7C298D003495",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 334.2,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_14_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 722.69
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_15.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 594.67,
                 "height": 40,
                 "y": 296.87,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 18)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_E44A2BA4_C400_E2C7_41E0_A2609BFF407E",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 296.98,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_15_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 594.83
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_16.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 1017.97,
                 "height": 40,
                 "y": 248.71,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 17)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DACD23D5_C400_E241_41C9_61DF597F20E6",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 248.82,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_16_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 1018.13
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_17.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 466.05,
                 "height": 40,
                 "y": 393.78,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 19)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DB7F3C9C_C407_A6C7_41E6_65EBC488DC2A",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 393.95,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_17_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 466.27
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_18.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 408.16,
                 "height": 40,
                 "y": 539.4,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 20)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_E451FDCD_C400_6641_41A4_7BAE73BC0F41",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 539.46,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_18_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 408.32
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_19.png",
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 500.05,
                 "height": 40,
                 "y": 658.57,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 21)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DB121774_C400_6247_41C7_68DAD729B5F3",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 658.62,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_19_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 500.21
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_20.png",
                    "height": 40,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 803.91,
                 "height": 40,
                 "y": 714.7,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 22)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DB5260D8_C400_5E4F_41D9_B1F31EB9721F",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 714.76,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_20_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 803.97
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_21.png",
                    "height": 40,
                    "class": "ImageResourceLevel",
                    "width": 40
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 816.92,
                 "height": 40,
                 "y": 579.47,
                 "class": "HotspotMapOverlayImage"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 23)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "id": "overlay_DBF989A5_C401_AEC1_41D9_EB7405D1A4ED",
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "useHandCursor": true,
                "map": {
                 "height": 40,
                 "y": 579.58,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A_HS_21_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 40,
                 "x": 817.03
                }
               }
              ],
              "initialZoomFactor": 1,
              "fieldOfViewOverlayOutsideOpacity": 0,
              "fieldOfViewOverlayRadiusScale": 0.1,
              "width": 1536,
              "height": 922,
              "id": "map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A"
             },
             "x": 738.48
            }
           ],
           "vfov": 180,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831, this.camera_0E0F896E_1249_749C_419E_A65BBFBF2341); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_EF6EF347_C281_8712_41C2_11386B2F4A13",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_0_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -12.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 88.63,
                 "hfov": 13.66
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_0_0.png",
                    "height": 153,
                    "class": "ImageResourceLevel",
                    "width": 159
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -12.31,
                 "yaw": 88.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 13.66
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F, this.camera_0E280987_1249_778B_41B2_1C5D3E37D054); this.mainPlayList.set('selectedIndex', 22)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_F3C55571_C286_83F1_41E7_67090BE4A95B",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_4_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 19
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -35.19,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 2.4,
                 "hfov": 26.02
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_4_0.png",
                    "height": 293,
                    "class": "ImageResourceLevel",
                    "width": 362
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -35.19,
                 "yaw": 2.4,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 26.02
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B, this.camera_0ED0598F_1249_779C_41B2_35EC57F43F72); this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_F302DFDA_C282_9F32_41D1_90263F1B0C87",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_3_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 18
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -20.67,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -87.06,
                 "hfov": 12.48
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_3_0.png",
                    "height": 133,
                    "class": "ImageResourceLevel",
                    "width": 151
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -20.67,
                 "yaw": -87.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.48
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424, this.camera_0E3FE97F_1249_777C_4183_AB8310C8346A); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_F376F5DA_C283_8332_41E8_0050C2CB8935",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_2_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -9.92,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -86.39,
                 "hfov": 6.67
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_2_0.png",
                    "height": 74,
                    "class": "ImageResourceLevel",
                    "width": 77
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -9.92,
                 "yaw": -86.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.67
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D, this.camera_0E379976_1249_748D_41A9_DD6D97D16E09); this.mainPlayList.set('selectedIndex', 21)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_F1D68A21_C282_810E_41D9_5080E4BA2704",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_1_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -17.27,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -162.96,
                 "hfov": 10.74
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_0_HS_1_0.png",
                    "height": 127,
                    "class": "ImageResourceLevel",
                    "width": 127
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -17.27,
                 "yaw": -162.96,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.74
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_r_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_f_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_b_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_u_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_d_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_l_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_t.jpg"
            }
           ],
           "id": "panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
             "backwardYaw": -88.61,
             "class": "AdjacentPanorama",
             "yaw": 88.63,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 110,
              "partial": false,
              "label": "9_dining_room",
              "thumbnailUrl": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_t.jpg",
              "class": "Panorama",
              "mapLocations": [
               {
                "y": 678.57,
                "angle": 91.08,
                "class": "PanoramaMapLocation",
                "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                "x": 520.05
               }
              ],
              "vfov": 180,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143, this.camera_098F18E6_1249_758C_41A8_E618195552DC); this.mainPlayList.set('selectedIndex', 20)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_C9CC0789_C400_A2C0_41E1_30AD0BA16DDB",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_2_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 17
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -25.41,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -127.27,
                    "hfov": 15.51
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_2_0.png",
                       "height": 177,
                       "class": "ImageResourceLevel",
                       "width": 195
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -25.41,
                    "yaw": -127.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.51
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A, this.camera_09B798EF_1249_759C_41A3_DA9D45E09D1D); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_CA74B1B1_C400_7EC0_41E7_012C5623B75B",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_1_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 25
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.28,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 17.04,
                    "hfov": 11.4
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_1_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 137
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.28,
                    "yaw": 17.04,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.4
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F, this.camera_09BF68F7_1249_758B_41A0_283497060D07); this.mainPlayList.set('selectedIndex', 22)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_CA48FE81_C401_A2C0_41D6_8411FE830DEA",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_0_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 19
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -10.61,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 12.52,
                    "hfov": 8.71
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_0_0.png",
                       "height": 84,
                       "class": "ImageResourceLevel",
                       "width": 100
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -10.61,
                    "yaw": 12.52,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.71
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.setComponentVisibility(this.Container_E5BEC59F_C514_055D_41CB_01933DA9ADAC, true, 0, this.effect_E68D95AE_C574_057F_41DD_76A94FE5C988, 'showEffect', false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DE09FEFF_C4BE_1A7C_41E8_726D1580558C",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_3_1_0_map.gif",
                       "height": 151,
                       "class": "ImageResourceLevel",
                       "width": 177
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 2.84,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -79.87,
                    "hfov": 30.49
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_0_HS_3_0.png",
                       "height": 302,
                       "class": "ImageResourceLevel",
                       "width": 355
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 2.84,
                    "yaw": -79.87,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "hfov": 30.49
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_r_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_f_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_b_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_u_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_d_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_l_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_t.jpg"
               }
              ],
              "id": "panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "hfovMax": 110,
                 "partial": false,
                 "label": "8_dining_room",
                 "thumbnailUrl": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_t.jpg",
                 "class": "Panorama",
                 "mapLocations": [
                  {
                   "y": 559.4,
                   "angle": 90.53,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                   "x": 428.16
                  }
                 ],
                 "vfov": 180,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8, this.camera_099EF8D6_1249_758C_41A0_12181590F06A); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_C9415A69_C400_E240_41BF_9E830605B934",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_1_0_0_map.gif",
                          "height": 15,
                          "class": "ImageResourceLevel",
                          "width": 18
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -27.77,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -71.4,
                       "hfov": 16.49
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_1_0.png",
                          "height": 187,
                          "class": "ImageResourceLevel",
                          "width": 211
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -27.77,
                       "yaw": -71.4,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 16.49
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D, this.camera_099698CD_1249_759C_41B0_88B7B2017AAC); this.mainPlayList.set('selectedIndex', 21)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_CA1B7C92_C407_A6C0_41E8_42C0362364E2",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_0_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 16
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -24.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 52.41,
                       "hfov": 15.62
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_0_0.png",
                          "height": 190,
                          "class": "ImageResourceLevel",
                          "width": 195
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -24.79,
                       "yaw": 52.41,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 15.62
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.setComponentVisibility(this.Container_E5BEC59F_C514_055D_41CB_01933DA9ADAC, true, 0, this.effect_E6B7E11E_C574_1D5F_41E2_E76BDBDA6EBA, 'showEffect', false)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D365BF9F_C486_1ABC_41E3_DED3016227B2",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_2_1_0_map.gif",
                          "height": 187,
                          "class": "ImageResourceLevel",
                          "width": 195
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 3.47,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -6.2,
                       "hfov": 33.33
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_0_HS_2_0.png",
                          "height": 375,
                          "class": "ImageResourceLevel",
                          "width": 390
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 3.47,
                       "yaw": -6.2,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "hfov": 33.33
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_r_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_f_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_b_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_u_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_d_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_l_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_t.jpg"
                  }
                 ],
                 "id": "panorama_C80E8AD5_C1BD_59EE_41E1_536971831143",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D",
                   "backwardYaw": -127.27,
                   "class": "AdjacentPanorama",
                   "yaw": 52.41,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 110,
                    "partial": false,
                    "label": "7_dining_room",
                    "thumbnailUrl": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_t.jpg",
                    "class": "Panorama",
                    "mapLocations": [
                     {
                      "y": 413.78,
                      "angle": 90,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                      "x": 486.05
                     }
                    ],
                    "vfov": 180,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE, this.camera_083F36E9_1249_7D84_4195_83E132682E0D); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C8CCA039_C400_7DC0_41E6_011E71671CAA",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_3_0_0_map.gif",
                             "height": 26,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -21.59,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -26.98,
                          "hfov": 8.92
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_3_0.png",
                             "height": 178,
                             "class": "ImageResourceLevel",
                             "width": 109
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -21.59,
                          "yaw": -26.98,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.92
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424, this.camera_083476D9_1249_7D84_41A7_FFEFE6867616); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C9CAE521_C403_A7C0_41E3_F100D25189B5",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_2_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 17
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -13.71,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -10.93,
                          "hfov": 8.92
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_2_0.png",
                             "height": 94,
                             "class": "ImageResourceLevel",
                             "width": 104
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -13.71,
                          "yaw": -10.93,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.92
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4, this.camera_0839D6E1_1249_7D84_4180_D743A52DFCE8); this.mainPlayList.set('selectedIndex', 17)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C97963E1_C400_A240_41E0_62A0ADFF80FC",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_1_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 19
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.03,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -14.83,
                          "hfov": 4.83
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_1_0.png",
                             "height": 46,
                             "class": "ImageResourceLevel",
                             "width": 55
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.03,
                          "yaw": -14.83,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.83
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143, this.camera_080EE6D1_1249_7D84_41A1_C8F8F0192919); this.mainPlayList.set('selectedIndex', 20)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CA45BCF9_C401_A640_41DC_F285B935AB8E",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_0_0_0_map.gif",
                             "height": 15,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -27.27,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 108.75,
                          "hfov": 16.99
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_0_HS_0_0.png",
                             "height": 206,
                             "class": "ImageResourceLevel",
                             "width": 217
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -27.27,
                          "yaw": 108.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 16.99
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_r_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_f_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_b_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_u_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_d_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_l_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_t.jpg"
                     }
                    ],
                    "id": "panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143",
                      "backwardYaw": -71.4,
                      "class": "AdjacentPanorama",
                      "yaw": 108.75,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 110,
                       "partial": false,
                       "label": "4_hallway",
                       "thumbnailUrl": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_t.jpg",
                       "class": "Panorama",
                       "mapLocations": [
                        {
                         "y": 354.09,
                         "angle": 89.6,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                         "x": 742.47
                        }
                       ],
                       "vfov": 180,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4, this.camera_0BB40602_1249_7C84_4196_BBD201F68B82); this.mainPlayList.set('selectedIndex', 17)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CEDE7279_C400_6240_41D9_05FE34AEAFBD",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_4_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 18
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -14.88,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -18.65,
                             "hfov": 9.15
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_4_0.png",
                                "height": 92,
                                "class": "ImageResourceLevel",
                                "width": 107
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -14.88,
                             "yaw": -18.65,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.15
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B, this.camera_0B8FE5FA_1249_7F85_41A2_2953C6753AD7); this.mainPlayList.set('selectedIndex', 14)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CEEFB669_C407_A240_41C2_16CA60CE2990",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_3_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 18
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -22.07,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 94.41,
                             "hfov": 13.19
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_3_0.png",
                                "height": 136,
                                "class": "ImageResourceLevel",
                                "width": 161
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -22.07,
                             "yaw": 94.41,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 13.19
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A, this.camera_0B86A5EA_1249_7F84_41A0_7FAC62FFC982); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CFCD8369_C400_A240_41C9_0603C5D0608F",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_2_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 17
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -10.19,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 93.68,
                             "hfov": 6.49
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_2_0.png",
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 75
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -10.19,
                             "yaw": 93.68,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.49
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE, this.camera_0BB8F60A_1249_7C84_419E_48F0DDEC5300); this.mainPlayList.set('selectedIndex', 18)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CF8E6E01_C401_A5C0_41D4_A26EE7B46557",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_1_0_0_map.gif",
                                "height": 15,
                                "class": "ImageResourceLevel",
                                "width": 17
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -27.28,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -166.19,
                             "hfov": 16.5
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_1_0.png",
                                "height": 197,
                                "class": "ImageResourceLevel",
                                "width": 211
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -27.28,
                             "yaw": -166.19,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 16.5
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8, this.camera_0B8B45F2_1249_7F84_4195_31C39ED305D8); this.mainPlayList.set('selectedIndex', 19)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CFBD6E01_C400_65C0_419C_0A5EEEB0EA8B",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_0_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 17
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -13.39,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 169.08,
                             "hfov": 8.66
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_0_0.png",
                                "height": 91,
                                "class": "ImageResourceLevel",
                                "width": 101
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -13.39,
                             "yaw": 169.08,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.66
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.setComponentVisibility(this.Container_D96FF609_C514_0725_41D2_A7BCAF02DC75, true, 0, this.effect_E164DE7E_C56C_07DF_41E5_1F00CAB94B72, 'showEffect', false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CBEC3B91_C49A_1A85_41B9_0C2952AECAA1",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": true,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_5_1_0_map.gif",
                                "height": 54,
                                "class": "ImageResourceLevel",
                                "width": 94
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.47,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -124,
                             "hfov": 16.55
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_0_HS_5_0.png",
                                "height": 109,
                                "class": "ImageResourceLevel",
                                "width": 189
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.47,
                             "yaw": -124,
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "hfov": 16.55
                            }
                           ]
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_r_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_f_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_b_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_u_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_d_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_l_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_t.jpg"
                        }
                       ],
                       "id": "panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
                         "backwardYaw": -86.39,
                         "class": "AdjacentPanorama",
                         "yaw": 93.68,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
                         "backwardYaw": -10.93,
                         "class": "AdjacentPanorama",
                         "yaw": 169.08,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 110,
                          "partial": false,
                          "label": "3_hallway",
                          "thumbnailUrl": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_t.jpg",
                          "class": "Panorama",
                          "mapLocations": [
                           {
                            "y": 541.75,
                            "angle": 92.1,
                            "class": "PanoramaMapLocation",
                            "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                            "x": 741.32
                           }
                          ],
                          "vfov": 180,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A, this.camera_0BEA55B1_1249_7F87_41A2_4B9D0FF5F21D); this.mainPlayList.set('selectedIndex', 13)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_F4577CA1_C287_810E_41E0_059CBD78A6CE",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_3_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -19.41,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 92.98,
                                "hfov": 12.6
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_3_0.png",
                                   "height": 150,
                                   "class": "ImageResourceLevel",
                                   "width": 152
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -19.41,
                                "yaw": 92.98,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 12.6
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424, this.camera_0BEE75B9_1249_7F84_41B0_1DF2202E801F); this.mainPlayList.set('selectedIndex', 16)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_FA0C9961_C287_830E_41D6_01BED6A4FFB6",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_2_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -20.24,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -85.44,
                                "hfov": 13.25
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_2_0.png",
                                   "height": 158,
                                   "class": "ImageResourceLevel",
                                   "width": 160
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -20.24,
                                "yaw": -85.44,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 13.25
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE, this.camera_0B9715C9_1249_7F87_41B0_502D8CB6A2AF); this.mainPlayList.set('selectedIndex', 18)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_F0781339_C286_877E_41E6_0DFBC62635D5",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_1_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -119.33,
                                "hfov": 10.09
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_1_0.png",
                                   "height": 122,
                                   "class": "ImageResourceLevel",
                                   "width": 119
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.55,
                                "yaw": -119.33,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 10.09
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6, this.camera_0B92D5C1_1249_7F84_419E_58540983E41B); this.mainPlayList.set('selectedIndex', 15)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CD39057C_C401_E647_41CD_44048C402DA0",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_0_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -8.72,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -178.09,
                                "hfov": 19.05
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_0_HS_0_0.png",
                                   "height": 219,
                                   "class": "ImageResourceLevel",
                                   "width": 219
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -8.72,
                                "yaw": -178.09,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 19.05
                               }
                              ]
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_r_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_f_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_b_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_u_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_d_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_l_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_t.jpg"
                           }
                          ],
                          "id": "panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
                            "backwardYaw": -87.06,
                            "class": "AdjacentPanorama",
                            "yaw": 92.98,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
                            "backwardYaw": 94.41,
                            "class": "AdjacentPanorama",
                            "yaw": -85.44,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "3_1_hallway_bathroom",
                             "thumbnailUrl": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 539.78,
                               "angle": 92.2,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                               "x": 644.62
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B, this.camera_081916AF_1249_7D9C_41B1_3CA2D9F97322); this.mainPlayList.set('selectedIndex', 14)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_CE052B2A_C400_63C3_41DB_F56E4FD4288C",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_0_HS_0_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.41,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -1.63,
                                   "hfov": 17.39
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_0_HS_0_0.png",
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 200
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.41,
                                   "yaw": -1.63,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 17.39
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_t.jpg"
                              }
                             ],
                             "id": "panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
                               "backwardYaw": -178.09,
                               "class": "AdjacentPanorama",
                               "yaw": -1.63,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": -1.63,
                            "class": "AdjacentPanorama",
                            "yaw": -178.09,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "6_kitchen",
                             "thumbnailUrl": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 316.87,
                               "angle": 92.37,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                               "x": 614.67
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424, this.camera_0894E755_1249_7C8C_4189_CBBC6B06FB3E); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C832DFC9_C400_6240_41E2_1F62166A0ED9",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_3_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -26.87,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 13.77,
                                   "hfov": 16.65
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_3_0.png",
                                      "height": 208,
                                      "class": "ImageResourceLevel",
                                      "width": 212
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -26.87,
                                   "yaw": 13.77,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 16.65
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B, this.camera_089CD75D_1249_7CBC_4190_7A6EC6907A8D); this.mainPlayList.set('selectedIndex', 14)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C92F6B71_C40F_A240_41C3_E7CFA850622D",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_2_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -16.17,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 60.64,
                                   "hfov": 9.87
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_2_0.png",
                                      "height": 114,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -16.17,
                                   "yaw": 60.64,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.87
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4, this.camera_08851766_1249_7C8C_41AC_AEFCBAFC46B7); this.mainPlayList.set('selectedIndex', 17)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C8D94D69_C400_E640_41E5_FFAFB0B85065",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_1_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 19
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.17,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -7.95,
                                   "hfov": 6.63
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_1_0.png",
                                      "height": 61,
                                      "class": "ImageResourceLevel",
                                      "width": 76
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.17,
                                   "yaw": -7.95,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.63
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8, this.camera_088CF76E_1249_7C9C_41AC_2965C4B17354); this.mainPlayList.set('selectedIndex', 19)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C862E711_C401_A3C0_41C8_5C6C08CCBCDC",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_0_0_0_map.gif",
                                      "height": 21,
                                      "class": "ImageResourceLevel",
                                      "width": 15
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -22.94,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 146.14,
                                   "hfov": 8.72
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_0_0.png",
                                      "height": 147,
                                      "class": "ImageResourceLevel",
                                      "width": 107
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -22.94,
                                   "yaw": 146.14,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.72
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.setComponentVisibility(this.Container_D96FF609_C514_0725_41D2_A7BCAF02DC75, true, 0, this.effect_E6FFE7B7_C56C_056D_41E2_61EB4EC5105A, 'showEffect', false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_E94887CF_C400_A241_41DB_8DCAFF9879E8",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": true,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_4_1_0_map.gif",
                                      "height": 81,
                                      "class": "ImageResourceLevel",
                                      "width": 132
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.82,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -56.44,
                                   "hfov": 23.04
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_4_0.png",
                                      "height": 163,
                                      "class": "ImageResourceLevel",
                                      "width": 265
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.82,
                                   "yaw": -56.44,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "hfov": 23.04
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.setComponentVisibility(this.Container_DBC3415F_C514_3DDD_41E3_3FC159A04082, true, 0, this.effect_E1322636_C574_076F_41A8_E9EBB730DDA5, 'showEffect', false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D7F44308_C48E_0B83_41E1_CDEEB933A9B1",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": true,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_5_1_0_map.gif",
                                      "height": 46,
                                      "class": "ImageResourceLevel",
                                      "width": 38
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -11.54,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 162.68,
                                   "hfov": 6.71
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_0_HS_5_0.png",
                                      "height": 92,
                                      "class": "ImageResourceLevel",
                                      "width": 76
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -11.54,
                                   "yaw": 162.68,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "hfov": 6.71
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_t.jpg"
                              }
                             ],
                             "id": "panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
                               "backwardYaw": -166.19,
                               "class": "AdjacentPanorama",
                               "yaw": 13.77,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
                               "backwardYaw": -119.33,
                               "class": "AdjacentPanorama",
                               "yaw": 60.64,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 110,
                                "partial": false,
                                "label": "5_fireplace",
                                "thumbnailUrl": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_t.jpg",
                                "class": "Panorama",
                                "mapLocations": [
                                 {
                                  "y": 268.71,
                                  "angle": 81.7,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                                  "x": 1037.97
                                 }
                                ],
                                "vfov": 180,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424, this.camera_0EB159F2_1249_7784_417F_4FE0718C42A4); this.mainPlayList.set('selectedIndex', 16)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_C83B3D71_C400_6640_41DD_56024A51F260",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_2_0_0_map.gif",
                                         "height": 15,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.45,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 161.23,
                                      "hfov": 9.21
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_2_0.png",
                                         "height": 103,
                                         "class": "ImageResourceLevel",
                                         "width": 108
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.45,
                                      "yaw": 161.23,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.21
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE, this.camera_0EB9D9FB_1249_7784_41A2_E7B9D8BD3D72); this.mainPlayList.set('selectedIndex', 18)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CFA97B91_C400_62C0_41E0_C67AFD5EB118",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_1_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 172.05,
                                      "hfov": 6.72
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_1_0.png",
                                         "height": 77,
                                         "class": "ImageResourceLevel",
                                         "width": 77
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.33,
                                      "yaw": 172.05,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 6.72
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8, this.camera_0E8939EA_1249_7784_41AF_4F9FB1DBB893); this.mainPlayList.set('selectedIndex', 19)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_C89FC411_C401_A5C0_41CE_C2EBCE61C3CA",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_0_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -6.72,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 165.14,
                                      "hfov": 4.55
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_0_HS_0_0.png",
                                         "height": 53,
                                         "class": "ImageResourceLevel",
                                         "width": 52
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -6.72,
                                      "yaw": 165.14,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 4.55
                                     }
                                    ]
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_r_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_f_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_b_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_u_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_d_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_l_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_t.jpg"
                                 }
                                ],
                                "id": "panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
                                  "backwardYaw": -14.83,
                                  "class": "AdjacentPanorama",
                                  "yaw": 165.14,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
                                  "backwardYaw": -18.65,
                                  "class": "AdjacentPanorama",
                                  "yaw": 161.23,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
                                  "backwardYaw": -7.95,
                                  "class": "AdjacentPanorama",
                                  "yaw": 172.05,
                                  "distance": 1
                                 }
                                ],
                                "hfovMin": 60,
                                "pitch": 0
                               },
                               "backwardYaw": 172.05,
                               "class": "AdjacentPanorama",
                               "yaw": -7.95,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
                               "backwardYaw": -26.98,
                               "class": "AdjacentPanorama",
                               "yaw": 146.14,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": 60.64,
                            "class": "AdjacentPanorama",
                            "yaw": -119.33,
                            "distance": 1
                           }
                          ],
                          "hfovMin": 60,
                          "pitch": 0
                         },
                         "backwardYaw": -85.44,
                         "class": "AdjacentPanorama",
                         "yaw": 94.41,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4",
                         "backwardYaw": 161.23,
                         "class": "AdjacentPanorama",
                         "yaw": -18.65,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
                         "backwardYaw": 13.77,
                         "class": "AdjacentPanorama",
                         "yaw": -166.19,
                         "distance": 1
                        }
                       ],
                       "hfovMin": 60,
                       "pitch": 0
                      },
                      "backwardYaw": 169.08,
                      "class": "AdjacentPanorama",
                      "yaw": -10.93,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4",
                      "backwardYaw": 165.14,
                      "class": "AdjacentPanorama",
                      "yaw": -14.83,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
                      "backwardYaw": 146.14,
                      "class": "AdjacentPanorama",
                      "yaw": -26.98,
                      "distance": 1
                     }
                    ],
                    "hfovMin": 60,
                    "pitch": 0
                   },
                   "backwardYaw": 108.75,
                   "class": "AdjacentPanorama",
                   "yaw": -71.4,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0
                },
                "backwardYaw": 52.41,
                "class": "AdjacentPanorama",
                "yaw": -127.27,
                "distance": 1
               },
               {
                "panorama": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
                "backwardYaw": -162.96,
                "class": "AdjacentPanorama",
                "yaw": 17.04,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 110,
                 "partial": false,
                 "label": "10_staircase",
                 "thumbnailUrl": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_t.jpg",
                 "class": "Panorama",
                 "mapLocations": [
                  {
                   "y": 734.7,
                   "angle": 90,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                   "x": 823.91
                  }
                 ],
                 "vfov": 180,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A, this.camera_094A07B1_1249_7B84_4182_A1ED73F4C5A8); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_CA2CEBC9_C400_A240_4194_19721AEDE373",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_2_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 16
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -39.94,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -174.84,
                       "hfov": 18.12
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_2_0.png",
                          "height": 258,
                          "class": "ImageResourceLevel",
                          "width": 268
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -39.94,
                       "yaw": -174.84,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 18.12
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D, this.camera_097317C1_1249_7B84_4181_A97B2703A131); this.mainPlayList.set('selectedIndex', 21)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_CB25C6C9_C400_6240_41E7_22E4E0E12B64",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_1_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 17
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.57,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -167.42,
                       "hfov": 8.41
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_1_0.png",
                          "height": 88,
                          "class": "ImageResourceLevel",
                          "width": 97
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.57,
                       "yaw": -167.42,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.41
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89, this.camera_097A87CF_1249_7B9C_419F_90D5144FE97C); this.mainPlayList.set('selectedIndex', 23)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_CAD5B1DA_C400_DE43_419B_B9DAC38F6209",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_0_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 19
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 16.63,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -87.92,
                       "hfov": 16.29
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_0_HS_0_0.png",
                          "height": 160,
                          "class": "ImageResourceLevel",
                          "width": 193
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 16.63,
                       "yaw": -87.92,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 16.29
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_r_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_f_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_b_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_u_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_d_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_l_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_t.jpg"
                  }
                 ],
                 "id": "panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
                   "backwardYaw": 2.4,
                   "class": "AdjacentPanorama",
                   "yaw": -174.84,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D",
                   "backwardYaw": 12.52,
                   "class": "AdjacentPanorama",
                   "yaw": -167.42,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 110,
                    "partial": false,
                    "label": "11_staircase",
                    "thumbnailUrl": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_t.jpg",
                    "class": "Panorama",
                    "mapLocations": [
                     {
                      "y": 599.47,
                      "angle": 90,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
                      "x": 836.92
                     }
                    ],
                    "vfov": 180,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_09C7088E_1249_759D_418E_4A12988237CE); this.mainPlayList.set('selectedIndex', 24)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CAC59D3A_C400_A7C3_41C9_6698A2122EB0",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_0_HS_1_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 17
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -2.29,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -91.74,
                          "hfov": 19.88
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_0_HS_1_0.png",
                             "height": 201,
                             "class": "ImageResourceLevel",
                             "width": 226
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -2.29,
                          "yaw": -91.74,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 19.88
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F, this.camera_09DEF880_1249_7584_419E_7A19996DE264); this.mainPlayList.set('selectedIndex', 22)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CB8BB60A_C400_65C3_41CD_B50AA6DFAA85",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_0_HS_0_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 22
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -46.78,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 92.18,
                          "hfov": 11.8
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_0_HS_0_0.png",
                             "height": 140,
                             "class": "ImageResourceLevel",
                             "width": 196
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -46.78,
                          "yaw": 92.18,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.8
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_r_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_f_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_b_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_u_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_d_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_l_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_t.jpg"
                     }
                    ],
                    "id": "panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F",
                      "backwardYaw": -87.92,
                      "class": "AdjacentPanorama",
                      "yaw": 92.18,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 110,
                       "partial": false,
                       "label": "12_hallway",
                       "thumbnailUrl": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_t.jpg",
                       "class": "Panorama",
                       "mapLocations": [
                        {
                         "y": 431.28,
                         "angle": 90,
                         "class": "PanoramaMapLocation",
                         "map": {
                          "scaleMode": "fit_outside",
                          "image": {
                           "levels": [
                            {
                             "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580.png",
                             "height": 922,
                             "class": "ImageResourceLevel",
                             "width": 1536
                            },
                            {
                             "grayscale": true,
                             "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_lq.png",
                             "height": 461,
                             "class": "ImageResourceLevel",
                             "width": 768
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "label": "first_floor",
                          "thumbnailUrl": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_t.png",
                          "fieldOfViewOverlayInsideColor": "#FFFFFF",
                          "fieldOfViewOverlayInsideOpacity": 0.4,
                          "fieldOfViewOverlayOutsideColor": "#000000",
                          "class": "Map",
                          "minimumZoomFactor": 1,
                          "maximumZoomFactor": 2,
                          "overlays": [
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_16.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 776.16,
                             "height": 40,
                             "y": 411.28,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 24)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_DB064485_C400_E6C1_41D5_A426DDF8AC2C",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 411.39,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_16_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 776.27
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_17.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1045.24,
                             "height": 40,
                             "y": 412.28,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 25)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E41E8A35_C401_ADC1_41C7_43943923E68B",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 412.39,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_17_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1045.35
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_18.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1056.31,
                             "height": 40,
                             "y": 268.97,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 26)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E44E8785_C400_62C1_41AA_2548EA28D356",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 269.08,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_18_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1056.42
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_19.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1020.09,
                             "height": 40,
                             "y": 566.33,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 27)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_DBACA2A5_C400_62C1_41E2_8B87EDD53F57",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 566.44,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_19_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1020.2
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_20.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1122.82,
                             "height": 40,
                             "y": 709.65,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 28)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E460FC5D_C400_6640_41CF_F332849BC686",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 709.76,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_20_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 1122.93
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_21.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 917.35,
                             "height": 40,
                             "y": 657.1,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 29)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E4CB0EE5_C400_A240_41E3_FEE21E5775C6",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 657.22,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_21_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 917.46
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_22.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 661.46,
                             "height": 40,
                             "y": 411.28,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 30)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E4F54AFD_C400_E240_41A8_EDFDA5FDCBF2",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 411.39,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_22_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 661.58
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_23.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 685.5,
                             "height": 40,
                             "y": 289.98,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 31)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E53F2645_C403_A240_41E6_696B24B08057",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 290.1,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_23_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 685.61
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_24.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 581.65,
                             "height": 40,
                             "y": 411.95,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 32)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E550A886_C401_AEC3_41A7_FAF49B863AF7",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 412.06,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_24_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 581.76
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_25.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 549,
                             "height": 40,
                             "y": 307.2,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 33)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E58CC00D_C400_7DC1_41E2_FF159F2F5542",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 307.31,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_25_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 549.11
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_26.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 516.14,
                             "height": 40,
                             "y": 411.72,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 34)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E5D1F54D_C400_6641_41DB_30228F3E869D",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 411.84,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_26_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 516.25
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_27.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 436.54,
                             "height": 40,
                             "y": 412.51,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 36)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E663214E_C400_BE43_41E7_CA44CD8F4853",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 412.62,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_27_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 436.65
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_28.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 333.02,
                             "height": 40,
                             "y": 561.75,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 37)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E6786F46_C407_A243_41DE_A65F047BAAF6",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 561.86,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_28_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 333.14
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_29.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 307.87,
                             "height": 40,
                             "y": 339.51,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 38)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E6F2EA7E_C400_A243_41E4_2F9BD7F10371",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 339.62,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_29_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 307.98
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_30.png",
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 39
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 518.6,
                             "height": 40,
                             "y": 546.32,
                             "class": "HotspotMapOverlayImage"
                            },
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 35)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "id": "overlay_E7B6204D_C400_5E41_41C3_7EF5233E4639",
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "useHandCursor": true,
                            "map": {
                             "height": 40,
                             "y": 546.43,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_6B14E531_7A18_1A08_41C9_522E8C08C580_HS_30_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 40,
                             "x": 518.71
                            }
                           }
                          ],
                          "initialZoomFactor": 1,
                          "fieldOfViewOverlayOutsideOpacity": 0,
                          "fieldOfViewOverlayRadiusScale": 0.1,
                          "width": 1536,
                          "height": 922,
                          "id": "map_6B14E531_7A18_1A08_41C9_522E8C08C580"
                         },
                         "x": 796.16
                        }
                       ],
                       "vfov": 180,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89, this.camera_0BAF7633_1249_7C84_419B_5E25CDD0EA0B); this.mainPlayList.set('selectedIndex', 23)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CBF83622_C400_A5C3_41CB_D8F3670A7E40",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_5_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 20
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -43.78,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 88.34,
                             "hfov": 15.24
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_5_0.png",
                                "height": 184,
                                "class": "ImageResourceLevel",
                                "width": 240
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -43.78,
                             "yaw": 88.34,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 15.24
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337, this.camera_0BAB062B_1249_7C84_4187_AB9B08569C86); this.mainPlayList.set('selectedIndex', 30)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D4EFE072_C400_5E43_41DD_245F25FA7355",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_4_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 22
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -38.88,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 178.79,
                             "hfov": 17.84
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_4_0.png",
                                "height": 182,
                                "class": "ImageResourceLevel",
                                "width": 260
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -38.88,
                             "yaw": 178.79,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 17.84
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352, this.camera_0858A643_1249_7C84_41B1_1678A0620426); this.mainPlayList.set('selectedIndex', 32)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D404BD12_C400_E7C3_41E0_85ECA7F7BA46",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_3_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 43
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -25.77,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 179.95,
                             "hfov": 14.68
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_3_0.png",
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 185
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -25.77,
                             "yaw": 179.95,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 14.68
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_0BA69623_1249_7C84_41A1_DC638051FBE4); this.mainPlayList.set('selectedIndex', 34)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CBC7A1EA_C403_BE40_41DB_7123CD9284B9",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_2_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 51
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -19.8,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 179.95,
                             "hfov": 12.66
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_2_0.png",
                                "height": 48,
                                "class": "ImageResourceLevel",
                                "width": 153
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -19.8,
                             "yaw": 179.95,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 12.66
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_0854363B_1249_7C84_41A7_A5AFA4A8BDCA); this.mainPlayList.set('selectedIndex', 36)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D4FC8A5A_C401_A240_41B2_A350090CC5F8",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_1_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 52
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -15.54,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 180.12,
                             "hfov": 9.74
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_1_0.png",
                                "height": 35,
                                "class": "ImageResourceLevel",
                                "width": 115
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -15.54,
                             "yaw": 180.12,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.74
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A, this.camera_0BA2161A_1249_7C84_4196_30EE4794C99E); this.mainPlayList.set('selectedIndex', 25)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_CBAD6702_C400_E3C0_41DB_899992BBA6BD",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_0_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -14.82,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 1.32,
                             "hfov": 17.3
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_0_HS_0_0.png",
                                "height": 203,
                                "class": "ImageResourceLevel",
                                "width": 203
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -14.82,
                             "yaw": 1.32,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 17.3
                            }
                           ]
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_r_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_f_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_b_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_u_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_d_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_l_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_t.jpg"
                        }
                       ],
                       "id": "panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "hfovMax": 110,
                          "partial": false,
                          "label": "13_bedroom",
                          "thumbnailUrl": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_t.jpg",
                          "class": "Panorama",
                          "mapLocations": [
                           {
                            "y": 432.28,
                            "angle": 91.55,
                            "class": "PanoramaMapLocation",
                            "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                            "x": 1065.24
                           }
                          ],
                          "vfov": 180,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_08D5170A_1249_7C84_4175_33962E40DF9D); this.mainPlayList.set('selectedIndex', 24)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CBF8CDBA_C401_E6C0_41D1_056D934DC5DF",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_4_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -3.35,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 179.68,
                                "hfov": 4.78
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_4_0.png",
                                   "height": 54,
                                   "class": "ImageResourceLevel",
                                   "width": 54
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -3.35,
                                "yaw": 179.68,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 4.78
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F, this.camera_082496F2_1249_7D85_4196_704F92AD4B2F); this.mainPlayList.set('selectedIndex', 26)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D40F53FA_C400_6243_41AA_8CF8CA691014",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_3_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -89.43,
                                "hfov": 18.91
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_3_0.png",
                                   "height": 221,
                                   "class": "ImageResourceLevel",
                                   "width": 221
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.63,
                                "yaw": -89.43,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 18.91
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761, this.camera_082A26FA_1249_7D84_41A9_EC19ACDD2A9F); this.mainPlayList.set('selectedIndex', 28)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D503BCAA_C400_A6C3_41CC_6D96E334BD08",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_2_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 21
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -11.85,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 74.2,
                                "hfov": 9.27
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_2_0.png",
                                   "height": 81,
                                   "class": "ImageResourceLevel",
                                   "width": 107
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -11.85,
                                "yaw": 74.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.27
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE, this.camera_08D93713_1249_7C84_41A3_53A36C4F3881); this.mainPlayList.set('selectedIndex', 27)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D4EF745A_C400_6643_41B1_E08161DDB52E",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_1_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -27.06,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 99.21,
                                "hfov": 16.12
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_1_0.png",
                                   "height": 199,
                                   "class": "ImageResourceLevel",
                                   "width": 205
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -27.06,
                                "yaw": 99.21,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 16.12
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29, this.camera_082FB702_1249_7C84_41B0_F30338616CFC); this.mainPlayList.set('selectedIndex', 29)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D4F1D0D2_C401_DE43_41DA_1774DCC4D936",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_0_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 17
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.61,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 123.8,
                                "hfov": 10.44
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_0_HS_0_0.png",
                                   "height": 110,
                                   "class": "ImageResourceLevel",
                                   "width": 123
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.61,
                                "yaw": 123.8,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 10.44
                               }
                              ]
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_r_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_f_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_b_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_u_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_d_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_l_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_t.jpg"
                           }
                          ],
                          "id": "panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "14_bedroom_bathroom",
                             "thumbnailUrl": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 288.97,
                               "angle": 91.64,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                               "x": 1076.31
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A, this.camera_0986E8DE_1249_75BD_41AE_F69ED0A90964); this.mainPlayList.set('selectedIndex', 25)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D52C66CA_C400_E243_41DE_D95E5CE8C679",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_0_HS_0_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -6.1,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 89.16,
                                   "hfov": 9.87
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_0_HS_0_0.png",
                                      "height": 112,
                                      "class": "ImageResourceLevel",
                                      "width": 112
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -6.1,
                                   "yaw": 89.16,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.87
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_t.jpg"
                              }
                             ],
                             "id": "panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
                               "backwardYaw": -89.43,
                               "class": "AdjacentPanorama",
                               "yaw": 89.16,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": 89.16,
                            "class": "AdjacentPanorama",
                            "yaw": -89.43,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "16_bedroom",
                             "thumbnailUrl": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 729.65,
                               "angle": 88.79,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                               "x": 1142.82
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29, this.camera_08E57745_1249_7C8C_41A0_E32514A9F901); this.mainPlayList.set('selectedIndex', 29)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D7348D23_C400_67C4_41E7_08C04CD4A894",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_2_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 18
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.65,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -160.31,
                                   "hfov": 10.72
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_2_0.png",
                                      "height": 113,
                                      "class": "ImageResourceLevel",
                                      "width": 128
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.65,
                                   "yaw": -160.31,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 10.72
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE, this.camera_08ED574D_1249_7C9F_41A3_86E0E788C76A); this.mainPlayList.set('selectedIndex', 27)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D734A5BB_C400_66C1_41E2_58C2CD7BA3E0",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_1_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -21.79,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -126.52,
                                   "hfov": 14.29
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_1_0.png",
                                      "height": 165,
                                      "class": "ImageResourceLevel",
                                      "width": 175
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -21.79,
                                   "yaw": -126.52,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 14.29
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A, this.camera_08FDE73C_1249_7CFC_41B1_32A4D0F95178); this.mainPlayList.set('selectedIndex', 25)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D019C1DB_C400_5E41_41D1_16436B402435",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_0_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 21
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.6,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -105.81,
                                   "hfov": 8.78
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_0_HS_0_0.png",
                                      "height": 78,
                                      "class": "ImageResourceLevel",
                                      "width": 103
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.6,
                                   "yaw": -105.81,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.78
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_t.jpg"
                              }
                             ],
                             "id": "panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
                               "backwardYaw": 74.2,
                               "class": "AdjacentPanorama",
                               "yaw": -105.81,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 110,
                                "partial": false,
                                "label": "18_bedroom",
                                "thumbnailUrl": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_t.jpg",
                                "class": "Panorama",
                                "mapLocations": [
                                 {
                                  "y": 677.1,
                                  "angle": 89.29,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                  "x": 937.35
                                 }
                                ],
                                "vfov": 180,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761, this.camera_0E00695D_1249_74BF_418A_B01B9395B078); this.mainPlayList.set('selectedIndex', 28)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D7590863_C400_AE41_41CD_87DD9195287E",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_2_0_0_map.gif",
                                         "height": 17,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.59,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 20.01,
                                      "hfov": 10.78
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_2_0.png",
                                         "height": 137,
                                         "class": "ImageResourceLevel",
                                         "width": 128
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.59,
                                      "yaw": 20.01,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 10.78
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE, this.camera_0E089966_1249_748C_41A2_0EB2FFED32DA); this.mainPlayList.set('selectedIndex', 27)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D7F4FD3B_C403_A7C1_41CF_2D7E41DD2B6C",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_1_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 20
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -30.89,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -28.47,
                                      "hfov": 18.69
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_1_0.png",
                                         "height": 193,
                                         "class": "ImageResourceLevel",
                                         "width": 247
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -30.89,
                                      "yaw": -28.47,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 18.69
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A, this.camera_0E182955_1249_748F_4168_A7FDCE4067BF); this.mainPlayList.set('selectedIndex', 25)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D14AB6A3_C400_A2C1_41BE_0781DF6C8414",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_0_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 21
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.6,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -56.05,
                                      "hfov": 10.63
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_0_0.png",
                                         "height": 96,
                                         "class": "ImageResourceLevel",
                                         "width": 126
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.6,
                                      "yaw": -56.05,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 10.63
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.setComponentVisibility(this.Container_E5BEC59F_C514_055D_41CB_01933DA9ADAC, true, 0, this.effect_E307C70F_C57C_053D_41E7_C3E8D99C76E2, 'showEffect', false)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DF6892CF_C4BA_0A9C_41E3_D35E36F932AB",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": true,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_3_1_0_map.gif",
                                         "height": 162,
                                         "class": "ImageResourceLevel",
                                         "width": 199
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": 5.23,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -154.14,
                                      "hfov": 47.91
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_0_HS_3_0.png",
                                         "height": 471,
                                         "class": "ImageResourceLevel",
                                         "width": 579
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": 5.23,
                                      "yaw": -154.14,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "hfov": 47.91
                                     }
                                    ]
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_r_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_f_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_b_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_u_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_d_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_l_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_t.jpg"
                                 }
                                ],
                                "id": "panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
                                  "backwardYaw": 123.8,
                                  "class": "AdjacentPanorama",
                                  "yaw": -56.05,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761",
                                  "backwardYaw": -160.31,
                                  "class": "AdjacentPanorama",
                                  "yaw": 20.01,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 110,
                                   "partial": false,
                                   "label": "15_bedroom",
                                   "thumbnailUrl": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_t.jpg",
                                   "class": "Panorama",
                                   "mapLocations": [
                                    {
                                     "y": 586.33,
                                     "angle": 91.07,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                     "x": 1040.09
                                    }
                                   ],
                                   "vfov": 180,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A, this.camera_081E76B8_1249_7D84_4187_AD9FDA57EC8A); this.mainPlayList.set('selectedIndex', 25)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D5C38293_C400_A2C1_41D8_FFC3C1A03FB5",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_2_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 17
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -27.17,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -80.81,
                                         "hfov": 15.79
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_2_0.png",
                                            "height": 184,
                                            "class": "ImageResourceLevel",
                                            "width": 201
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -27.17,
                                         "yaw": -80.81,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 15.79
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761, this.camera_080436C0_1249_7D84_4183_B53E2D640334); this.mainPlayList.set('selectedIndex', 28)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D6F7E083_C400_7EC1_41C8_1EA5F14F0E1F",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_1_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 17
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -23.17,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 53.86,
                                         "hfov": 13.66
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_1_0.png",
                                            "height": 152,
                                            "class": "ImageResourceLevel",
                                            "width": 169
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -23.17,
                                         "yaw": 53.86,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 13.66
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29, this.camera_080966C8_1249_7D85_418E_9AC2F499E6A2); this.mainPlayList.set('selectedIndex', 29)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D6B7340B_C401_A5C1_418C_23123DF1C876",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_0_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 17
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -30.22,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 151.46,
                                         "hfov": 18.08
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_0_HS_0_0.png",
                                            "height": 217,
                                            "class": "ImageResourceLevel",
                                            "width": 238
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -30.22,
                                         "yaw": 151.46,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 18.08
                                        }
                                       ]
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_r_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_f_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_b_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_u_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_d_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_l_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_t.jpg"
                                    }
                                   ],
                                   "id": "panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
                                     "backwardYaw": 99.21,
                                     "class": "AdjacentPanorama",
                                     "yaw": -80.81,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761",
                                     "backwardYaw": -126.52,
                                     "class": "AdjacentPanorama",
                                     "yaw": 53.86,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29",
                                     "backwardYaw": -28.47,
                                     "class": "AdjacentPanorama",
                                     "yaw": 151.46,
                                     "distance": 1
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "pitch": 0
                                  },
                                  "backwardYaw": 151.46,
                                  "class": "AdjacentPanorama",
                                  "yaw": -28.47,
                                  "distance": 1
                                 }
                                ],
                                "hfovMin": 60,
                                "pitch": 0
                               },
                               "backwardYaw": 20.01,
                               "class": "AdjacentPanorama",
                               "yaw": -160.31,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE",
                               "backwardYaw": 53.86,
                               "class": "AdjacentPanorama",
                               "yaw": -126.52,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": -105.81,
                            "class": "AdjacentPanorama",
                            "yaw": 74.2,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29",
                            "backwardYaw": -56.05,
                            "class": "AdjacentPanorama",
                            "yaw": 123.8,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                            "backwardYaw": 1.32,
                            "class": "AdjacentPanorama",
                            "yaw": 179.68,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE",
                            "backwardYaw": -80.81,
                            "class": "AdjacentPanorama",
                            "yaw": 99.21,
                            "distance": 1
                           }
                          ],
                          "hfovMin": 60,
                          "pitch": 0
                         },
                         "backwardYaw": 179.68,
                         "class": "AdjacentPanorama",
                         "yaw": 1.32,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 110,
                          "partial": false,
                          "label": "23_hallway",
                          "thumbnailUrl": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_t.jpg",
                          "class": "Panorama",
                          "mapLocations": [
                           {
                            "y": 431.72,
                            "angle": 89.47,
                            "class": "PanoramaMapLocation",
                            "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                            "x": 536.14
                           }
                          ],
                          "vfov": 180,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60, this.camera_0E4F192B_1249_749B_41A4_663DB46D4AE1); this.mainPlayList.set('selectedIndex', 35)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D1C9F3CB_C407_A240_41D6_84F8A807B0A5",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_5_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 86.71,
                                "hfov": 17.03
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_5_0.png",
                                   "height": 199,
                                   "class": "ImageResourceLevel",
                                   "width": 199
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.34,
                                "yaw": 86.71,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 17.03
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352, this.camera_0E10194D_1249_749C_41A5_6CFF5FE46D03); this.mainPlayList.set('selectedIndex', 32)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D2560E4B_C401_E240_41E7_406FBF82BA0B",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_4_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 30
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -56.09,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -1.07,
                                "hfov": 29.39
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_4_0.png",
                                   "height": 311,
                                   "class": "ImageResourceLevel",
                                   "width": 599
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -56.09,
                                "yaw": -1.07,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 29.39
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337, this.camera_0E7F993C_1249_74FC_4194_21C52E1CFAD4); this.mainPlayList.set('selectedIndex', 30)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D2E2677B_C400_A240_41E1_85CAFFBA6CAC",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_3_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 26
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.85,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -1.29,
                                "hfov": 17.53
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_3_0.png",
                                   "height": 144,
                                   "class": "ImageResourceLevel",
                                   "width": 234
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.85,
                                "yaw": -1.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 17.53
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_0E779933_1249_748B_419A_301ECC133C37); this.mainPlayList.set('selectedIndex', 24)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D2C51DDB_C403_A640_41E6_C24607F9A508",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_2_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 20
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -17.51,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -0.84,
                                "hfov": 10.73
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_2_0.png",
                                   "height": 101,
                                   "class": "ImageResourceLevel",
                                   "width": 128
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -17.51,
                                "yaw": -0.84,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 10.73
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_0E67F944_1249_748D_4198_0FC472B1F1D1); this.mainPlayList.set('selectedIndex', 36)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D308763B_C400_65C0_41C0_19411CBE7E3E",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_1_0_0_map.gif",
                                   "height": 16,
                                   "class": "ImageResourceLevel",
                                   "width": 21
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -45.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -179.73,
                                "hfov": 30.51
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_1_0.png",
                                   "height": 362,
                                   "class": "ImageResourceLevel",
                                   "width": 495
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -45.55,
                                "yaw": -179.73,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 30.51
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048, this.camera_0E46E922_1249_7484_41B1_9BD06BD7FC86); this.mainPlayList.set('selectedIndex', 37)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_DD50C7A3_C407_E2C0_41D8_5C1D18151547",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_0_0_0_map.gif",
                                   "height": 36,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -17,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 141.72,
                                "hfov": 6.16
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_0_HS_0_0.png",
                                   "height": 165,
                                   "class": "ImageResourceLevel",
                                   "width": 73
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -17,
                                "yaw": 141.72,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.16
                               }
                              ]
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_r_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_f_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_b_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_u_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_d_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_l_hq.jpeg",
                               "height": 1296,
                               "class": "ImageResourceLevel",
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_t.jpg"
                           }
                          ],
                          "id": "panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "26_kidroom",
                             "thumbnailUrl": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 581.75,
                               "angle": 87.19,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                               "x": 353.02
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_0BCB5570_1249_7C84_419A_DD342026E016); this.mainPlayList.set('selectedIndex', 36)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DDA9CA73_C400_6240_41B2_49B4F458873B",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_1_0_0_map.gif",
                                      "height": 24,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -23.89,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -54.21,
                                   "hfov": 8
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_1_0.png",
                                      "height": 150,
                                      "class": "ImageResourceLevel",
                                      "width": 99
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -23.89,
                                   "yaw": -54.21,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_0BC78568_1249_7C85_4127_49E6C4BE18E0); this.mainPlayList.set('selectedIndex', 34)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DD90A9B3_C400_AEC0_41DE_B9E83A4A2F6C",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_0_0_0_map.gif",
                                      "height": 27,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -18.34,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -44.65,
                                   "hfov": 6.34
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_0_0.png",
                                      "height": 129,
                                      "class": "ImageResourceLevel",
                                      "width": 76
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -18.34,
                                   "yaw": -44.65,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.34
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.setComponentVisibility(this.Container_E48CE21F_C56C_1F5D_41E3_AB47633F333B, true, 0, this.effect_E6963B46_C574_0D2C_41E2_BD7228F7532F, 'showEffect', false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D9445808_C48A_0584_41BF_D34F1FE29678",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": true,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_2_1_0_map.gif",
                                      "height": 169,
                                      "class": "ImageResourceLevel",
                                      "width": 71
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 11.68,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -164.65,
                                   "hfov": 12.49
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_0_HS_2_0.png",
                                      "height": 338,
                                      "class": "ImageResourceLevel",
                                      "width": 142
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 11.68,
                                   "yaw": -164.65,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "hfov": 12.49
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_t.jpg"
                              }
                             ],
                             "id": "panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                               "backwardYaw": 141.72,
                               "class": "AdjacentPanorama",
                               "yaw": -44.65,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 110,
                                "partial": false,
                                "label": "25_hallway",
                                "thumbnailUrl": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_t.jpg",
                                "class": "Panorama",
                                "mapLocations": [
                                 {
                                  "y": 432.51,
                                  "angle": 90.42,
                                  "class": "PanoramaMapLocation",
                                  "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                  "x": 456.54
                                 }
                                ],
                                "vfov": 180,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_08405654_1249_7C8C_41B1_100E649E3F51); this.mainPlayList.set('selectedIndex', 34)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D3D4734B_C400_A241_41C9_9384D4198801",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_5_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 34
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -51.79,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 1.08,
                                      "hfov": 26.18
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_5_0.png",
                                         "height": 225,
                                         "class": "ImageResourceLevel",
                                         "width": 481
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -51.79,
                                      "yaw": 1.08,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 26.18
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352, this.camera_08744675_1249_7C8C_41AD_2AA31510B7B3); this.mainPlayList.set('selectedIndex', 32)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DC2BE8EC_C401_EE47_41E0_88805C226A0B",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_4_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 31
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -33.73,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 0.7,
                                      "hfov": 18.6
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_4_0.png",
                                         "height": 130,
                                         "class": "ImageResourceLevel",
                                         "width": 254
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -33.73,
                                      "yaw": 0.7,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 18.6
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337, this.camera_084EE66D_1249_7C9C_4199_620654DDC6DA); this.mainPlayList.set('selectedIndex', 30)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DDF5D3E3_C400_A241_41E4_47F43716A4BF",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_3_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 30
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -21.78,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.27,
                                      "hfov": 12.99
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_3_0.png",
                                         "height": 83,
                                         "class": "ImageResourceLevel",
                                         "width": 159
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -21.78,
                                      "yaw": -0.27,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 12.99
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_0844F65C_1249_7CBC_419C_8E9C6C7ED192); this.mainPlayList.set('selectedIndex', 24)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DC893ECB_C403_A240_41DB_08EDFE0B5C07",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_2_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 27
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.28,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.24,
                                      "hfov": 8.76
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_2_0.png",
                                         "height": 60,
                                         "class": "ImageResourceLevel",
                                         "width": 102
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.28,
                                      "yaw": -0.24,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.76
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048, this.camera_085BD64C_1249_7C9C_41A8_99D5F0A144E8); this.mainPlayList.set('selectedIndex', 37)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DCD734C3_C400_6640_41C1_9E6D7A601C9D",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_1_0_0_map.gif",
                                         "height": 24,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -23.23,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 118.69,
                                      "hfov": 8.77
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_1_0.png",
                                         "height": 164,
                                         "class": "ImageResourceLevel",
                                         "width": 108
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -23.23,
                                      "yaw": 118.69,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.77
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440, this.camera_0849B665_1249_7C8C_418B_9221D3AFD256); this.mainPlayList.set('selectedIndex', 38)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DCAFCD0B_C401_A7C0_41CE_39EF9760081F",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_0_0_0_map.gif",
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 16
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.97,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -126.24,
                                      "hfov": 23.25
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_0_HS_0_0.png",
                                         "height": 276,
                                         "class": "ImageResourceLevel",
                                         "width": 276
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.97,
                                      "yaw": -126.24,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 23.25
                                     }
                                    ]
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_r_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_f_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_b_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_u_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_d_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_l_hq.jpeg",
                                     "height": 1296,
                                     "class": "ImageResourceLevel",
                                     "width": 1296
                                    },
                                    {
                                     "url": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_t.jpg"
                                 }
                                ],
                                "id": "panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048",
                                  "backwardYaw": -54.21,
                                  "class": "AdjacentPanorama",
                                  "yaw": 118.69,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                                  "backwardYaw": -179.73,
                                  "class": "AdjacentPanorama",
                                  "yaw": 1.08,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                                  "backwardYaw": 180.12,
                                  "class": "AdjacentPanorama",
                                  "yaw": -0.24,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 110,
                                   "partial": false,
                                   "label": "27_workroom",
                                   "thumbnailUrl": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_t.jpg",
                                   "class": "Panorama",
                                   "mapLocations": [
                                    {
                                     "y": 359.51,
                                     "angle": 89.63,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                     "x": 327.87
                                    }
                                   ],
                                   "vfov": 180,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_090F982E_1249_749D_41A1_20D086B7FFFC); this.mainPlayList.set('selectedIndex', 36)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_DD06F7BB_C400_A2C0_41CD_48BB0F065F08",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_0_HS_0_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -6.11,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 25.8,
                                         "hfov": 9.14
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_0_HS_0_0.png",
                                            "height": 104,
                                            "class": "ImageResourceLevel",
                                            "width": 104
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -6.11,
                                         "yaw": 25.8,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 9.14
                                        }
                                       ]
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_r_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_f_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_b_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_u_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_d_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_l_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_t.jpg"
                                    }
                                   ],
                                   "id": "panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                                     "backwardYaw": -126.24,
                                     "class": "AdjacentPanorama",
                                     "yaw": 25.8,
                                     "distance": 1
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "pitch": 0
                                  },
                                  "backwardYaw": 25.8,
                                  "class": "AdjacentPanorama",
                                  "yaw": -126.24,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 110,
                                   "partial": false,
                                   "label": "19_hallway",
                                   "thumbnailUrl": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_t.jpg",
                                   "class": "Panorama",
                                   "mapLocations": [
                                    {
                                     "y": 431.28,
                                     "angle": 89.25,
                                     "class": "PanoramaMapLocation",
                                     "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                     "x": 681.46
                                    }
                                   ],
                                   "vfov": 180,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_09E5F8BD_1249_75FC_418B_F8C4C084E742); this.mainPlayList.set('selectedIndex', 24)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D39EC3D3_C400_A241_41D2_66D22276373A",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_4_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 19
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -36.2,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 0.1,
                                         "hfov": 22.1
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_4_0.png",
                                            "height": 252,
                                            "class": "ImageResourceLevel",
                                            "width": 311
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -36.2,
                                         "yaw": 0.1,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 22.1
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1, this.camera_09F588A9_1249_7584_414A_CAE3D901F7F1); this.mainPlayList.set('selectedIndex', 31)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D7DC806B_C400_7E41_419D_0939190507E4",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_3_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 16
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -16.54,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -88.54,
                                         "hfov": 20.37
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_3_0.png",
                                            "height": 241,
                                            "class": "ImageResourceLevel",
                                            "width": 241
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -16.54,
                                         "yaw": -88.54,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 20.37
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352, this.camera_09EE48C5_1249_758C_4175_0D72FE73A3D1); this.mainPlayList.set('selectedIndex', 32)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D12A4B33_C407_A3C1_41E8_5E6882C5EFDB",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_2_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 33
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -49.06,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 179.36,
                                         "hfov": 25.81
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_2_0.png",
                                            "height": 211,
                                            "class": "ImageResourceLevel",
                                            "width": 448
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -49.06,
                                         "yaw": 179.36,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 25.81
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_09FDE8B4_1249_758C_419F_3CA79188EC9A); this.mainPlayList.set('selectedIndex', 34)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D0C285C3_C400_E641_41A6_E42AA1088658",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_1_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 39
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -33.34,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 180.74,
                                         "hfov": 21.41
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_1_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 291
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -33.34,
                                         "yaw": 180.74,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 21.41
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_09CD689C_1249_75BC_4167_CDA87CF1CC7D); this.mainPlayList.set('selectedIndex', 36)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D126604B_C400_BE41_41DB_E5C29B7AD395",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_0_0_0_map.gif",
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 28
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -21.48,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 180.53,
                                         "hfov": 14.41
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_0_HS_0_0.png",
                                            "height": 99,
                                            "class": "ImageResourceLevel",
                                            "width": 176
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -21.48,
                                         "yaw": 180.53,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 14.41
                                        }
                                       ]
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_r_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_f_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_b_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_u_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_d_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_l_hq.jpeg",
                                        "height": 1296,
                                        "class": "ImageResourceLevel",
                                        "width": 1296
                                       },
                                       {
                                        "url": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_t.jpg"
                                    }
                                   ],
                                   "id": "panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                                     "backwardYaw": -0.27,
                                     "class": "AdjacentPanorama",
                                     "yaw": 180.53,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 110,
                                      "partial": false,
                                      "label": "20_babyroom",
                                      "thumbnailUrl": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_t.jpg",
                                      "class": "Panorama",
                                      "mapLocations": [
                                       {
                                        "y": 309.98,
                                        "angle": 88.51,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                        "x": 705.5
                                       }
                                      ],
                                      "vfov": 180,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337, this.camera_0BBDA612_1249_7C85_418D_433FBB19AFEA); this.mainPlayList.set('selectedIndex', 30)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D0A6C6AB_C403_E2C1_41BF_ED0CCA32C94D",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_0_HS_0_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 16
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -6.44,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 114.41,
                                            "hfov": 9.73
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_0_HS_0_0.png",
                                               "height": 111,
                                               "class": "ImageResourceLevel",
                                               "width": 111
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -6.44,
                                            "yaw": 114.41,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.73
                                           }
                                          ]
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_r_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_f_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_b_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_u_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_d_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_l_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_t.jpg"
                                       }
                                      ],
                                      "id": "panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
                                        "backwardYaw": -88.54,
                                        "class": "AdjacentPanorama",
                                        "yaw": 114.41,
                                        "distance": 1
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "pitch": 0
                                     },
                                     "backwardYaw": 114.41,
                                     "class": "AdjacentPanorama",
                                     "yaw": -88.54,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                                     "backwardYaw": -1.29,
                                     "class": "AdjacentPanorama",
                                     "yaw": 180.74,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                                     "backwardYaw": 178.79,
                                     "class": "AdjacentPanorama",
                                     "yaw": 0.1,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 110,
                                      "partial": false,
                                      "label": "21_hallway",
                                      "thumbnailUrl": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_t.jpg",
                                      "class": "Panorama",
                                      "mapLocations": [
                                       {
                                        "y": 431.95,
                                        "angle": 88.14,
                                        "class": "PanoramaMapLocation",
                                        "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                        "x": 601.65
                                       }
                                      ],
                                      "vfov": 180,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF, this.camera_0ED8A997_1249_778C_41A7_7D27ED7B32BD); this.mainPlayList.set('selectedIndex', 33)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D0EEB40B_C401_A5C1_41DC_0EB991889EFA",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_4_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 16
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.42,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -92.66,
                                            "hfov": 18.96
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_4_0.png",
                                               "height": 222,
                                               "class": "ImageResourceLevel",
                                               "width": 222
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.42,
                                            "yaw": -92.66,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 18.96
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337, this.camera_0EF989B9_1249_7784_4162_9663A8DEA51B); this.mainPlayList.set('selectedIndex', 30)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D12DB043_C400_5E41_41D6_B6E6DDB78CE1",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_3_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 22
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -45.42,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -1.58,
                                            "hfov": 26.49
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_3_0.png",
                                               "height": 304,
                                               "class": "ImageResourceLevel",
                                               "width": 429
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -45.42,
                                            "yaw": -1.58,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 26.49
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_0EC8E9A8_1249_7784_41AA_7B61977A3BC6); this.mainPlayList.set('selectedIndex', 34)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D168220B_C40F_DDC1_41D3_7CE6B517B6C3",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_2_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 30
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -56.97,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 177.47,
                                            "hfov": 26.71
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_2_0.png",
                                               "height": 291,
                                               "class": "ImageResourceLevel",
                                               "width": 557
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -56.97,
                                            "yaw": 177.47,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 26.71
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C, this.camera_0EF159B1_1249_7787_41AC_76445CB2A638); this.mainPlayList.set('selectedIndex', 24)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D192CF2B_C400_E3C1_41E1_A2CD270362E3",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_1_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 18
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -22.29,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -0.43,
                                            "hfov": 13.61
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_1_0.png",
                                               "height": 141,
                                               "class": "ImageResourceLevel",
                                               "width": 167
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -22.29,
                                            "yaw": -0.43,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 13.61
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C, this.camera_0EC0A9A0_1249_7784_41A8_7E80466EA452); this.mainPlayList.set('selectedIndex', 36)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_D1E4BA1B_C403_EDC1_41D2_8685C8C43460",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_0_0_0_map.gif",
                                               "height": 16,
                                               "class": "ImageResourceLevel",
                                               "width": 23
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -32.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 179.74,
                                            "hfov": 18.15
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_0_HS_0_0.png",
                                               "height": 164,
                                               "class": "ImageResourceLevel",
                                               "width": 244
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -32.49,
                                            "yaw": 179.74,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 18.15
                                           }
                                          ]
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_r_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_f_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_b_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_u_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_d_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_l_hq.jpeg",
                                           "height": 1296,
                                           "class": "ImageResourceLevel",
                                           "width": 1296
                                          },
                                          {
                                           "url": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_t.jpg"
                                       }
                                      ],
                                      "id": "panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "hfovMax": 110,
                                         "partial": false,
                                         "label": "22_laundryroom",
                                         "thumbnailUrl": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_t.jpg",
                                         "class": "Panorama",
                                         "mapLocations": [
                                          {
                                           "y": 327.2,
                                           "angle": 90,
                                           "class": "PanoramaMapLocation",
                                           "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                                           "x": 569
                                          }
                                         ],
                                         "vfov": 180,
                                         "hfov": 360,
                                         "frames": [
                                          {
                                           "overlays": [
                                            {
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352, this.camera_081556A7_1249_7D8C_419F_D18F28A2EE9F); this.mainPlayList.set('selectedIndex', 32)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "id": "overlay_D1BFBFE3_C401_A241_41D1_8D21904B95EB",
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_0_HS_0_0_0_map.gif",
                                                  "height": 16,
                                                  "class": "ImageResourceLevel",
                                                  "width": 16
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -9.59,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 66.12,
                                               "hfov": 13.09
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_0_HS_0_0.png",
                                                  "height": 150,
                                                  "class": "ImageResourceLevel",
                                                  "width": 150
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -9.59,
                                               "yaw": 66.12,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 13.09
                                              }
                                             ]
                                            }
                                           ],
                                           "right": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_r_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_r.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "front": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_f_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_f.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "class": "CubicPanoramaFrame",
                                           "back": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_b_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_b.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "top": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_u_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_u.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "bottom": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_d_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_d.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "left": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_l_hq.jpeg",
                                              "height": 1296,
                                              "class": "ImageResourceLevel",
                                              "width": 1296
                                             },
                                             {
                                              "url": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_l.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "thumbnailUrl": "media/panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_t.jpg"
                                          }
                                         ],
                                         "id": "panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF",
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
                                           "backwardYaw": -92.66,
                                           "class": "AdjacentPanorama",
                                           "yaw": 66.12,
                                           "distance": 1
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "pitch": 0
                                        },
                                        "backwardYaw": 66.12,
                                        "class": "AdjacentPanorama",
                                        "yaw": -92.66,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                                        "backwardYaw": 0.7,
                                        "class": "AdjacentPanorama",
                                        "yaw": 179.74,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                                        "backwardYaw": -1.07,
                                        "class": "AdjacentPanorama",
                                        "yaw": 177.47,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                                        "backwardYaw": 179.95,
                                        "class": "AdjacentPanorama",
                                        "yaw": -0.43,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
                                        "backwardYaw": 179.36,
                                        "class": "AdjacentPanorama",
                                        "yaw": -1.58,
                                        "distance": 1
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "pitch": 0
                                     },
                                     "backwardYaw": -1.58,
                                     "class": "AdjacentPanorama",
                                     "yaw": 179.36,
                                     "distance": 1
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "pitch": 0
                                  },
                                  "backwardYaw": 180.53,
                                  "class": "AdjacentPanorama",
                                  "yaw": -0.27,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
                                  "backwardYaw": 179.74,
                                  "class": "AdjacentPanorama",
                                  "yaw": 0.7,
                                  "distance": 1
                                 }
                                ],
                                "hfovMin": 60,
                                "pitch": 0
                               },
                               "backwardYaw": 118.69,
                               "class": "AdjacentPanorama",
                               "yaw": -54.21,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": -44.65,
                            "class": "AdjacentPanorama",
                            "yaw": 141.72,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 110,
                             "partial": false,
                             "label": "24_hallway_bathroom",
                             "thumbnailUrl": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_t.jpg",
                             "class": "Panorama",
                             "mapLocations": [
                              {
                               "y": 566.32,
                               "angle": 86.58,
                               "class": "PanoramaMapLocation",
                               "map": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
                               "x": 538.6
                              }
                             ],
                             "vfov": 180,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64, this.camera_08B33776_1249_7C8C_41A6_E30F811DD38B); this.mainPlayList.set('selectedIndex', 34)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D2C15B14_C400_A3C7_41DF_0D5DA69BC64F",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_0_HS_0_0_0_map.gif",
                                      "height": 16,
                                      "class": "ImageResourceLevel",
                                      "width": 16
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.84,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -92.03,
                                   "hfov": 7.44
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_0_HS_0_0.png",
                                      "height": 85,
                                      "class": "ImageResourceLevel",
                                      "width": 85
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.84,
                                   "yaw": -92.03,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 7.44
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_r_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_f_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_b_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_u_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_d_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_l_hq.jpeg",
                                  "height": 1296,
                                  "class": "ImageResourceLevel",
                                  "width": 1296
                                 },
                                 {
                                  "url": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_t.jpg"
                              }
                             ],
                             "id": "panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
                               "backwardYaw": 86.71,
                               "class": "AdjacentPanorama",
                               "yaw": -92.03,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "pitch": 0
                            },
                            "backwardYaw": -92.03,
                            "class": "AdjacentPanorama",
                            "yaw": 86.71,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
                            "backwardYaw": 179.95,
                            "class": "AdjacentPanorama",
                            "yaw": -0.84,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
                            "backwardYaw": 180.74,
                            "class": "AdjacentPanorama",
                            "yaw": -1.29,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                            "backwardYaw": 1.08,
                            "class": "AdjacentPanorama",
                            "yaw": -179.73,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
                            "backwardYaw": 177.47,
                            "class": "AdjacentPanorama",
                            "yaw": -1.07,
                            "distance": 1
                           }
                          ],
                          "hfovMin": 60,
                          "pitch": 0
                         },
                         "backwardYaw": -0.84,
                         "class": "AdjacentPanorama",
                         "yaw": 179.95,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
                         "backwardYaw": 0.1,
                         "class": "AdjacentPanorama",
                         "yaw": 178.79,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89",
                         "backwardYaw": -91.74,
                         "class": "AdjacentPanorama",
                         "yaw": 88.34,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
                         "backwardYaw": -0.24,
                         "class": "AdjacentPanorama",
                         "yaw": 180.12,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
                         "backwardYaw": -0.43,
                         "class": "AdjacentPanorama",
                         "yaw": 179.95,
                         "distance": 1
                        }
                       ],
                       "hfovMin": 60,
                       "pitch": 0
                      },
                      "backwardYaw": 88.34,
                      "class": "AdjacentPanorama",
                      "yaw": -91.74,
                      "distance": 1
                     }
                    ],
                    "hfovMin": 60,
                    "pitch": 0
                   },
                   "backwardYaw": 92.18,
                   "class": "AdjacentPanorama",
                   "yaw": -87.92,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0
                },
                "backwardYaw": -167.42,
                "class": "AdjacentPanorama",
                "yaw": 12.52,
                "distance": 1
               }
              ],
              "hfovMin": 60,
              "pitch": 0
             },
             "backwardYaw": 17.04,
             "class": "AdjacentPanorama",
             "yaw": -162.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
             "backwardYaw": 93.68,
             "class": "AdjacentPanorama",
             "yaw": -86.39,
             "distance": 1
            },
            {
             "panorama": "this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F",
             "backwardYaw": -174.84,
             "class": "AdjacentPanorama",
             "yaw": 2.4,
             "distance": 1
            },
            {
             "panorama": "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
             "backwardYaw": 92.98,
             "class": "AdjacentPanorama",
             "yaw": -87.06,
             "distance": 1
            }
           ],
           "hfovMin": 60,
           "pitch": 0
          },
          "backwardYaw": 88.63,
          "class": "AdjacentPanorama",
          "yaw": -88.61,
          "distance": 1
         },
         {
          "panorama": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
          "backwardYaw": -89.57,
          "class": "AdjacentPanorama",
          "yaw": 90.47,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 110,
           "label": "exterior9",
           "thumbnailUrl": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_t.jpg",
           "class": "Panorama",
           "vfov": 180,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9, this.camera_0BE1E5A1_1249_7F84_4197_2FC5B6B94EEA); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E8B34707_C281_8F12_41C4_F9CF3CC92DBB",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_5_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 21
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.05,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -89.7,
                 "hfov": 4.3
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_5_0.png",
                    "height": 37,
                    "class": "ImageResourceLevel",
                    "width": 49
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.05,
                 "yaw": -89.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.3
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609, this.camera_0BF5C589_1249_7F84_416C_DBEA447CC248); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E8D53EC6_C28E_8112_41D2_C1BDF29FF099",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_4_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 20
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -86.31,
                 "hfov": 2.13
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_4_0.png",
                    "height": 19,
                    "class": "ImageResourceLevel",
                    "width": 24
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.94,
                 "yaw": -86.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.13
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677, this.camera_0BFE0599_1249_7F87_41A6_F798E33F7130); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E9410A0E_C28F_8112_41E1_12475715832B",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_3_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 30
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.53,
                 "hfov": 3.21
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_3_0.png",
                    "height": 19,
                    "class": "ImageResourceLevel",
                    "width": 36
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.84,
                 "yaw": 0.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 3.21
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_0BE655A9_1249_7F84_41B1_D72E1A592FDF); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E823AEE7_C28E_8112_41D7_B1B81F41B3D2",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_2_0_0_map.gif",
                    "height": 8,
                    "class": "ImageResourceLevel",
                    "width": 23
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.13,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.28,
                 "hfov": 2.06
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_2_0.png",
                    "height": 8,
                    "class": "ImageResourceLevel",
                    "width": 23
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.13,
                 "yaw": 0.28,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.06
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_0BF9C591_1249_7F84_41B1_D38FF08408FC); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E84783F6_C281_86F2_41A6_DD556DDFF2A7",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_1_0_0_map.gif",
                    "height": 9,
                    "class": "ImageResourceLevel",
                    "width": 19
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.32,
                 "hfov": 1.69
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_1_0.png",
                    "height": 9,
                    "class": "ImageResourceLevel",
                    "width": 19
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -2.14,
                 "yaw": 0.32,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 1.69
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831, this.camera_0BF36580_1249_7F84_4198_7201BC991D70); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_EEDEC247_C282_8112_41E2_44904EE5B7D3",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_0_0_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 23
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.81,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -17.27,
                 "hfov": 2.36
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_0_HS_0_0.png",
                    "height": 18,
                    "class": "ImageResourceLevel",
                    "width": 26
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.81,
                 "yaw": -17.27,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.36
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_r_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_f_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_b_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_u_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_d_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_l_hq.jpeg",
                "height": 1296,
                "class": "ImageResourceLevel",
                "width": 1296
               },
               {
                "url": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_t.jpg"
            }
           ],
           "id": "panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
             "backwardYaw": 162.39,
             "class": "AdjacentPanorama",
             "yaw": -17.27,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 110,
              "label": "exterior7",
              "thumbnailUrl": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_t.jpg",
              "class": "Panorama",
              "vfov": 180,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272, this.camera_08C79724_1249_7C8D_419C_B6B0FBFF2B4C); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_EA86EBBE_C286_8772_41E7_FE30A879032E",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_3_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 25
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -4.61,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -6.3,
                    "hfov": 3.21
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_3_0.png",
                       "height": 23,
                       "class": "ImageResourceLevel",
                       "width": 36
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -4.61,
                    "yaw": -6.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 3.21
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59, this.camera_08C0371C_1249_7CBC_41A3_0E248941C918); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_EA825D9F_C286_8332_41E8_02EDECF7AAA1",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_2_0_0_map.gif",
                       "height": 14,
                       "class": "ImageResourceLevel",
                       "width": 20
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.38,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -0.3,
                    "hfov": 1.8
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_2_0.png",
                       "height": 14,
                       "class": "ImageResourceLevel",
                       "width": 20
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.38,
                    "yaw": -0.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 1.8
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9, this.camera_08CF172C_1249_7C9C_41AB_92F204F9915C); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_EB094C47_C287_8112_41BC_5463A5A3EA9E",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_1_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 19
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -5.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 96.94,
                    "hfov": 4.11
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_1_0.png",
                       "height": 38,
                       "class": "ImageResourceLevel",
                       "width": 46
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -5.62,
                    "yaw": 96.94,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.11
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_08F69734_1249_7C8C_41A6_27A829C95717); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_EBE07E77_C286_81F2_41A2_78AA712093AB",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_0_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 20
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 93.68,
                    "hfov": 2.1
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_0_HS_0_0.png",
                       "height": 18,
                       "class": "ImageResourceLevel",
                       "width": 23
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.94,
                    "yaw": 93.68,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 2.1
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_r_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_f_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_b_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_u_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_d_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_l_hq.jpeg",
                   "height": 1296,
                   "class": "ImageResourceLevel",
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_t.jpg"
               }
              ],
              "id": "panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "hfovMax": 110,
                 "label": "exterior5",
                 "thumbnailUrl": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_t.jpg",
                 "class": "Panorama",
                 "vfov": 180,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2, this.camera_08A2E787_1249_7B8C_4185_56549145D2AE); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E4F91F7E_C283_FFF2_41CF_A7ACFAD95099",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_4_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 19
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -5.61,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 73.76,
                       "hfov": 3.92
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_4_0.png",
                          "height": 36,
                          "class": "ImageResourceLevel",
                          "width": 44
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -5.61,
                       "yaw": 73.76,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 3.92
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_08BAE77F_1249_7B7C_4183_571877F4A1B0); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E5DCAAE6_C282_8112_41E5_B1C74D2C0EB7",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_3_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 22
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.94,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 82.66,
                       "hfov": 2.2
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_3_0.png",
                          "height": 18,
                          "class": "ImageResourceLevel",
                          "width": 25
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.94,
                       "yaw": 82.66,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 2.2
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_095A67A0_1249_7B84_41B0_AFEE064FEAF9); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E763DCDE_C282_8132_41D4_28D06832D35B",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_2_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 19
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.9,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 105.14,
                       "hfov": 1.7
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_2_0.png",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 19
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.9,
                       "yaw": 105.14,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 1.7
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272, this.camera_08AAC78F_1249_7B9B_4192_00C98792EFFA); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E527667E_C2FE_81F2_41C9_E3AAD192CCF4",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_1_0_0_map.gif",
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 19
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -4.93,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -173.83,
                       "hfov": 3.4
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_1_0.png",
                          "height": 31,
                          "class": "ImageResourceLevel",
                          "width": 38
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -4.93,
                       "yaw": -173.83,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 3.4
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609, this.camera_09529797_1249_7B8C_4179_37430BA47F2C); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E4504206_C2FF_8112_416B_3AA577236530",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_0_0_0_map.gif",
                          "height": 13,
                          "class": "ImageResourceLevel",
                          "width": 15
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.25,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 179.53,
                       "hfov": 1.39
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_0_HS_0_0.png",
                          "height": 13,
                          "class": "ImageResourceLevel",
                          "width": 15
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -2.25,
                       "yaw": 179.53,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 1.39
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_r_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_f_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_b_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_u_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_d_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_l_hq.jpeg",
                      "height": 1296,
                      "class": "ImageResourceLevel",
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_t.jpg"
                  }
                 ],
                 "id": "panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
                   "backwardYaw": -97.31,
                   "class": "AdjacentPanorama",
                   "yaw": 82.66,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 110,
                    "label": "exterior4",
                    "thumbnailUrl": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_t.jpg",
                    "class": "Panorama",
                    "vfov": 180,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59, this.camera_0B9F25DA_1249_7F84_4194_5047FF28E1B1); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E633334E_C283_8712_41B5_5FB3396D8235",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_2_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 21
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.68,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -106.21,
                          "hfov": 3.86
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_2_0.png",
                             "height": 33,
                             "class": "ImageResourceLevel",
                             "width": 44
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.68,
                          "yaw": -106.21,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.86
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_0B9B05D1_1249_7F87_4193_517615FC6088); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E775674F_C282_8F12_41D9_248806F98844",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_1_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 20
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.86,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 92,
                          "hfov": 4.11
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_1_0.png",
                             "height": 37,
                             "class": "ImageResourceLevel",
                             "width": 47
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.86,
                          "yaw": 92,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.11
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C, this.camera_0B83A5E2_1249_7F85_41A6_A170D138B18A); this.mainPlayList.set('selectedIndex', 4)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E7849E26_C281_8112_41DE_4442B9E746BD",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_0_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 22
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.56,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 130.13,
                          "hfov": 3.16
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_0_HS_0_0.png",
                             "height": 26,
                             "class": "ImageResourceLevel",
                             "width": 36
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.56,
                          "yaw": 130.13,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.16
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_r_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_f_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_b_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_u_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_d_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_l_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_t.jpg"
                     }
                    ],
                    "id": "panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
                      "backwardYaw": -87.91,
                      "class": "AdjacentPanorama",
                      "yaw": 92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
                      "backwardYaw": 73.76,
                      "class": "AdjacentPanorama",
                      "yaw": -106.21,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 110,
                       "label": "exterior2",
                       "thumbnailUrl": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_t.jpg",
                       "class": "Panorama",
                       "vfov": 180,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677, this.camera_09077820_1249_7484_41A7_D513F62BA018); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D9B4838D_C286_8716_41BF_4ADB0BBE9D40",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_5_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.27,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -179.55,
                             "hfov": 4.54
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_5_0.png",
                                "height": 55,
                                "class": "ImageResourceLevel",
                                "width": 52
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.27,
                             "yaw": -179.55,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.54
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_091027F7_1249_7B8B_41B2_26DE100FCD4C); this.mainPlayList.set('selectedIndex', 11)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DB2CF0D5_C287_8136_41D6_2F6478FA5A5E",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_4_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 20
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -2.77,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -179.62,
                             "hfov": 2.1
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_4_0.png",
                                "height": 18,
                                "class": "ImageResourceLevel",
                                "width": 23
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -2.77,
                             "yaw": -179.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 2.1
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93, this.camera_09181805_1249_748C_41A7_6885CFB428C3); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DBE1B7AD_C286_8F16_41E8_22F2F6C83A53",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_3_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 19
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.1,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -0.07,
                             "hfov": 5.46
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_3_0.png",
                                "height": 51,
                                "class": "ImageResourceLevel",
                                "width": 62
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.1,
                             "yaw": -0.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.46
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2, this.camera_091FB813_1249_7484_41B1_EE69DBBBA901); this.mainPlayList.set('selectedIndex', 6)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DA568355_C281_8736_41DF_1AF9BAB3CE0A",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_2_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 22
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -4.53,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -49.92,
                             "hfov": 3.19
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_2_0.png",
                                "height": 26,
                                "class": "ImageResourceLevel",
                                "width": 36
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -4.53,
                             "yaw": -49.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 3.19
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59, this.camera_096A47EA_1249_7B84_41A1_DA69B8E55ED6); this.mainPlayList.set('selectedIndex', 7)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DBA1F40D_C283_8116_41E4_C8462172D506",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_1_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 22
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -2.82,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -74.62,
                             "hfov": 2.12
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_1_0.png",
                                "height": 17,
                                "class": "ImageResourceLevel",
                                "width": 24
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -2.82,
                             "yaw": -74.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 2.12
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831, this.camera_096247DC_1249_7BBC_41A7_2E66D203856C); this.mainPlayList.set('selectedIndex', 12)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_E6A15E4D_C286_8116_4157_524440CA0A5A",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_6_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.72,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -151.23,
                             "hfov": 4.77
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_0_HS_6_0.png",
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 54
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.72,
                             "yaw": -151.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.77
                            }
                           ]
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_r_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_f_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_b_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_u_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_d_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_l_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_t.jpg"
                        }
                       ],
                       "id": "panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
                         "backwardYaw": 28.76,
                         "class": "AdjacentPanorama",
                         "yaw": -151.23,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
                         "backwardYaw": 105.14,
                         "class": "AdjacentPanorama",
                         "yaw": -74.62,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
                         "backwardYaw": 0.28,
                         "class": "AdjacentPanorama",
                         "yaw": -179.62,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
                         "backwardYaw": -179.61,
                         "class": "AdjacentPanorama",
                         "yaw": -0.07,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2",
                         "backwardYaw": 130.13,
                         "class": "AdjacentPanorama",
                         "yaw": -49.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
                         "backwardYaw": -0.02,
                         "class": "AdjacentPanorama",
                         "yaw": -179.55,
                         "distance": 1
                        }
                       ],
                       "hfovMin": 1,
                       "partial": false,
                       "pitch": 0
                      },
                      "backwardYaw": -49.92,
                      "class": "AdjacentPanorama",
                      "yaw": 130.13,
                      "distance": 1
                     }
                    ],
                    "hfovMin": 60,
                    "partial": false,
                    "pitch": 0
                   },
                   "backwardYaw": -106.21,
                   "class": "AdjacentPanorama",
                   "yaw": 73.76,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 110,
                    "label": "exterior6",
                    "thumbnailUrl": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_t.jpg",
                    "class": "Panorama",
                    "vfov": 180,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59, this.camera_0EE1B9C1_1249_7784_4195_1446AA030506); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E595296E_C2FE_8312_41C6_89A85AAB2E66",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_2_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 19
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.91,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 6.19,
                          "hfov": 3.38
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_2_0.png",
                             "height": 32,
                             "class": "ImageResourceLevel",
                             "width": 38
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.91,
                          "yaw": 6.19,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.38
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609, this.camera_0EE9C9C9_1249_7784_41AA_64215CC24B45); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E420B16F_C281_8312_41E0_9282FD7C4FFE",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_1_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 20
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.51,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 173.68,
                          "hfov": 3.14
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_1_0.png",
                             "height": 27,
                             "class": "ImageResourceLevel",
                             "width": 35
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.51,
                          "yaw": 173.68,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.14
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9, this.camera_0E9079D1_1249_7787_41A5_05800D7BA7F3); this.mainPlayList.set('selectedIndex', 10)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_EAC64706_C282_8F12_41D4_A287540D29A9",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_0_0_0_map.gif",
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 21
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -3.19,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 140.79,
                          "hfov": 2.36
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_0_HS_0_0.png",
                             "height": 19,
                             "class": "ImageResourceLevel",
                             "width": 26
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -3.19,
                          "yaw": 140.79,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 2.36
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_r_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_f_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_b_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_u_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_d_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_l_hq.jpeg",
                         "height": 1296,
                         "class": "ImageResourceLevel",
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_t.jpg"
                     }
                    ],
                    "id": "panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
                      "backwardYaw": -173.83,
                      "class": "AdjacentPanorama",
                      "yaw": 6.19,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
                      "backwardYaw": -6.3,
                      "class": "AdjacentPanorama",
                      "yaw": 173.68,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 110,
                       "label": "exterior8",
                       "thumbnailUrl": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_t.jpg",
                       "class": "Panorama",
                       "vfov": 180,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609, this.camera_0E569912_1249_7484_4188_1F8AF7766636); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_EB18CAAE_C281_8112_41E1_5CDE04061BA9",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_3_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 20
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.68,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -83.04,
                             "hfov": 4.22
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_3_0.png",
                                "height": 37,
                                "class": "ImageResourceLevel",
                                "width": 48
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.68,
                             "yaw": -83.04,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.22
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272, this.camera_09AE5909_1249_7484_41AF_EE602C532A73); this.mainPlayList.set('selectedIndex', 8)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_E98D1646_C282_8112_41D1_7B91E354B4A9",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_2_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 21
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.21,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -39.13,
                             "hfov": 2.43
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_2_0.png",
                                "height": 20,
                                "class": "ImageResourceLevel",
                                "width": 27
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.21,
                             "yaw": -39.13,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 2.43
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17, this.camera_0E5EB91A_1249_7484_417A_0D661F557BF0); this.mainPlayList.set('selectedIndex', 11)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_E81314A6_C283_8112_41B6_14867CF52957",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_1_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 21
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.98,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 90.26,
                             "hfov": 4.33
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_1_0.png",
                                "height": 37,
                                "class": "ImageResourceLevel",
                                "width": 49
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -5.98,
                             "yaw": 90.26,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.33
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677, this.camera_09A7B900_1249_7484_41AC_EE320E5C3364); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_E88587E6_C282_8F12_41C7_EF1B98513064",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_0_0_0_map.gif",
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 20
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.56,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 37.01,
                             "hfov": 2.62
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_0_HS_0_0.png",
                                "height": 23,
                                "class": "ImageResourceLevel",
                                "width": 29
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -3.56,
                             "yaw": 37.01,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 2.62
                            }
                           ]
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_r_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_f_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_b_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_u_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_d_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_l_hq.jpeg",
                            "height": 1296,
                            "class": "ImageResourceLevel",
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_t.jpg"
                        }
                       ],
                       "id": "panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
                         "backwardYaw": -143.06,
                         "class": "AdjacentPanorama",
                         "yaw": 37.01,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272",
                         "backwardYaw": 140.79,
                         "class": "AdjacentPanorama",
                         "yaw": -39.13,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
                         "backwardYaw": 96.94,
                         "class": "AdjacentPanorama",
                         "yaw": -83.04,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
                         "backwardYaw": -89.7,
                         "class": "AdjacentPanorama",
                         "yaw": 90.26,
                         "distance": 1
                        }
                       ],
                       "hfovMin": 60,
                       "partial": false,
                       "pitch": 0
                      },
                      "backwardYaw": -39.13,
                      "class": "AdjacentPanorama",
                      "yaw": 140.79,
                      "distance": 1
                     }
                    ],
                    "hfovMin": 60,
                    "partial": false,
                    "pitch": 0
                   },
                   "backwardYaw": 6.19,
                   "class": "AdjacentPanorama",
                   "yaw": -173.83,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
                   "backwardYaw": -0.3,
                   "class": "AdjacentPanorama",
                   "yaw": 179.53,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
                   "backwardYaw": -74.62,
                   "class": "AdjacentPanorama",
                   "yaw": 105.14,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 60,
                 "partial": false,
                 "pitch": 0
                },
                "backwardYaw": 179.53,
                "class": "AdjacentPanorama",
                "yaw": -0.3,
                "distance": 1
               },
               {
                "panorama": "this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272",
                "backwardYaw": 173.68,
                "class": "AdjacentPanorama",
                "yaw": -6.3,
                "distance": 1
               },
               {
                "panorama": "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
                "backwardYaw": -83.04,
                "class": "AdjacentPanorama",
                "yaw": 96.94,
                "distance": 1
               },
               {
                "panorama": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
                "backwardYaw": -86.31,
                "class": "AdjacentPanorama",
                "yaw": 93.68,
                "distance": 1
               }
              ],
              "hfovMin": 60,
              "partial": false,
              "pitch": 0
             },
             "backwardYaw": 93.68,
             "class": "AdjacentPanorama",
             "yaw": -86.31,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
             "backwardYaw": -179.7,
             "class": "AdjacentPanorama",
             "yaw": 0.32,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
             "backwardYaw": -179.13,
             "class": "AdjacentPanorama",
             "yaw": 0.53,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
             "backwardYaw": 90.26,
             "class": "AdjacentPanorama",
             "yaw": -89.7,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
             "backwardYaw": -179.62,
             "class": "AdjacentPanorama",
             "yaw": 0.28,
             "distance": 1
            }
           ],
           "hfovMin": 60,
           "partial": false,
           "pitch": 0
          },
          "backwardYaw": -17.27,
          "class": "AdjacentPanorama",
          "yaw": 162.39,
          "distance": 1
         },
         {
          "panorama": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
          "backwardYaw": -151.23,
          "class": "AdjacentPanorama",
          "yaw": 28.76,
          "distance": 1
         }
        ],
        "hfovMin": 60,
        "partial": false,
        "pitch": 0
       },
       "backwardYaw": 15.01,
       "class": "AdjacentPanorama",
       "yaw": -165.17,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
       "backwardYaw": 82.66,
       "class": "AdjacentPanorama",
       "yaw": -97.31,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
       "backwardYaw": 0.32,
       "class": "AdjacentPanorama",
       "yaw": -179.7,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2",
       "backwardYaw": 92,
       "class": "AdjacentPanorama",
       "yaw": -87.91,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
       "backwardYaw": -0.04,
       "class": "AdjacentPanorama",
       "yaw": -179.98,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
       "backwardYaw": -0.07,
       "class": "AdjacentPanorama",
       "yaw": -179.61,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": -179.98,
    "class": "AdjacentPanorama",
    "yaw": -0.04,
    "distance": 1
   },
   {
    "panorama": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
    "backwardYaw": 90.47,
    "class": "AdjacentPanorama",
    "yaw": -89.57,
    "distance": 1
   },
   {
    "panorama": "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
    "backwardYaw": 37.01,
    "class": "AdjacentPanorama",
    "yaw": -143.06,
    "distance": 1
   },
   {
    "panorama": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
    "backwardYaw": 0.53,
    "class": "AdjacentPanorama",
    "yaw": -179.13,
    "distance": 1
   },
   {
    "panorama": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
    "backwardYaw": -179.55,
    "class": "AdjacentPanorama",
    "yaw": -0.02,
    "distance": 1
   }
  ],
  "hfovMin": 60,
  "partial": false,
  "pitch": 0
 },
 {
  "id": "panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.19,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.96
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
 {
  "id": "panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
 {
  "id": "panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2",
 {
  "id": "panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
 {
  "id": "panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272",
 {
  "id": "panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
 {
  "id": "panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
 {
  "id": "panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
 {
  "id": "panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
 {
  "id": "panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
 {
  "viewerArea": "this.MapViewer",
  "buttonZoomOut": "this.IconButton_DF10E394_D157_0776_41C9_43D644960AB3",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D",
  "movementMode": "constrained"
 },
 {
  "id": "panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
 {
  "id": "panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6",
 {
  "id": "panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
 {
  "id": "panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4",
 {
  "id": "panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
 {
  "id": "panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
 {
  "id": "panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143",
 {
  "id": "panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D",
 {
  "id": "panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F",
 {
  "id": "panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89",
 {
  "id": "panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
 {
  "id": "panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
 {
  "id": "panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F",
 {
  "id": "panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE",
 {
  "id": "panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761",
 {
  "id": "panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29",
 {
  "id": "panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
 {
  "id": "panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1",
 {
  "id": "panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
 {
  "id": "panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF",
 {
  "id": "panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
 {
  "id": "panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60",
 {
  "id": "panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
 {
  "id": "panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048",
 {
  "id": "panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440",
 {
  "id": "panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B4DEFBB7_B8D6_3C3F_41D7_D8F5296C8844_camera",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, 0, this.effect_0EBA59FB_1249_7784_41AE_25629B5C3ABC, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_FFAF4FFF_C57E_1A7C_4193_B37414F57800, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_FFAF4FFF_C57E_1A7C_4193_B37414F57800, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CC494C4D_C282_8116_41E8_4B0614D6CE4A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CD1E5B5E_C283_8732_41DF_DEDC67725541_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B47051C9_B8EA_2C53_41C6_4E214C297677_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B4158EE4_B8EE_1451_41E3_FADBB50F0B4C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43FFDC3_B8EE_3457_41E0_0DBB55833F93_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43B7F4B_B8EE_F457_41CC_54362C9A37F2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43943F2_B8EE_2C31_41A1_BA4554E13C59_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43CE1C7_B8EE_2C5F_41E4_AD7019CAD272_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43E8CE1_B8EF_F453_41DC_987BF8A50609_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B403E936_B8EE_1C31_41DF_0D8B243021C9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B43C8643_B8EE_3457_41AF_3979EEB3AC17_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B40304C0_B8EE_1451_41CA_A19523ED3831_camera",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, 0, this.effect_0EBC39FC_1249_777C_41A6_07DC25A6B57C, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_FFAD7000_C57E_0584_41D2_CE7D8AADD548, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_FFAD7000_C57E_0584_41D2_CE7D8AADD548, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3A9514_1249_7C8C_41B1_D1193349F02E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3A9514_1249_7C8C_41B1_D1193349F02E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CB898F25_C1B5_78AE_41E4_8DA82B9EE99A_camera",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, 0, this.effect_FFAD0001_C57E_0584_41D6_8A5E51B66C17, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_0EBC99FC_1249_777C_419E_245F24FBBBF6, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_FFAD0001_C57E_0584_41D6_8A5E51B66C17, 'showEffect', false)"
   },
   {
    "media": "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3AC514_1249_7C8C_4195_6CEAA24BBA81, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3AC514_1249_7C8C_4195_6CEAA24BBA81",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C826A40C_C1B5_487E_41E8_34CBADE02D9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3B3514_1249_7C8C_4187_1D0D0206176E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3B3514_1249_7C8C_4187_1D0D0206176E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F5CB75FA_C281_82F2_41E5_22BC72BE75A6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3B6514_1249_7C8C_41A9_A2D27F50E125, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3B6514_1249_7C8C_41A9_A2D27F50E125",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C87B90F9_C1B5_49A6_41DD_27FE8B93F424_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3BA515_1249_7C8F_41B0_B1931062DDA5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3BA515_1249_7C8F_41B0_B1931062DDA5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C83D5853_C1B3_B8EA_41E1_C56F4213F3E4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3C1515_1249_7C8F_41A3_E66626903727, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3C1515_1249_7C8F_41A3_E66626903727",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C8223E0C_C1B3_B87E_41E1_542A90222ABE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3C5515_1249_7C8F_41A1_7B8E13E8BBA2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3C5515_1249_7C8F_41A1_7B8E13E8BBA2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C85DBE77_C1B2_F8AA_41E0_499EBFDF53B8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3C8515_1249_7C8F_41AC_72FE3EFF2C8E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3C8515_1249_7C8F_41AC_72FE3EFF2C8E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C80E8AD5_C1BD_59EE_41E1_536971831143_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3CE515_1249_7C8F_41AB_E4E561B58297, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3CE515_1249_7C8F_41AB_E4E561B58297",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C846B912_C1BD_D86A_41D3_8C39BC732D9D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "media": "this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3D5516_1249_7C8C_41A3_E6D0D93940D7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3D5516_1249_7C8C_41A3_E6D0D93940D7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBBA233C_C1BF_489E_41C3_5B852B30F00F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "media": "this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3D9516_1249_7C8C_418C_05E1BD718869, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3D9516_1249_7C8C_418C_05E1BD718869",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C822F57B_C1BF_489A_41E0_10D33EC3BD89_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "media": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3DD516_1249_7C8C_41A7_C87143B3C005, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3DD516_1249_7C8C_41A7_C87143B3C005",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CA555A00_C1BD_5866_41CE_2AA69F263E6C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "media": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3E0516_1249_7C8C_4190_FD5F20778701, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3E0516_1249_7C8C_4190_FD5F20778701",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEB7D27_C1BD_58AA_41AF_5FA2648A4B9A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "media": "this.panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3E4516_1249_7C8C_41B0_C074BACC6A90, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3E4516_1249_7C8C_41B0_C074BACC6A90",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEC2774_C1B3_48AE_41E6_5A4A4095466F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "media": "this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3ED517_1249_7C8C_41A7_73623E5A6663, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3ED517_1249_7C8C_41A7_73623E5A6663",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C8159B10_C1B3_5866_41B1_2471E913F1EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "media": "this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3F1517_1249_7C8C_4169_83BA1EB0B652, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3F1517_1249_7C8C_4169_83BA1EB0B652",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEB0BE4_C1B3_FFAE_41DF_40D8D52AE761_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "media": "this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3F4517_1249_7C8C_41A9_B58151121542, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3F4517_1249_7C8C_41A9_B58151121542",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEA3AAB_C1B3_59BA_41DD_8CC8CB985E29_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "media": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3F8517_1249_7C8C_4189_AA9C9402B341, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3F8517_1249_7C8C_4189_AA9C9402B341",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBE872C7_C1B2_C9EA_41B2_C088C5394337_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "media": "this.panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B3FC517_1249_7C8C_41AD_748919E22790, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B3FC517_1249_7C8C_41AD_748919E22790",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEB86A9_C1B5_49A6_41B2_FE75B07852C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)"
   },
   {
    "media": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B203518_1249_7C84_41AF_853CCDE11810, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B203518_1249_7C84_41AF_853CCDE11810",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEA3DFC_C1B5_5B9E_41C1_1971FA13D352_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "media": "this.panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B209518_1249_7C84_419C_7F7EB070B3F2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B209518_1249_7C84_419C_7F7EB070B3F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CBEA7433_C1B5_C8AA_41CF_0BD5380D38DF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "media": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B20C518_1249_7C84_41AF_C6FBCABE7BB1, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B20C518_1249_7C84_41AF_C6FBCABE7BB1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CA49AD5C_C1B5_589E_41E0_DFBC15735A64_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "media": "this.panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B210518_1249_7C84_41A8_421F160F100F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B210518_1249_7C84_41A8_421F160F100F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CAA2E0A6_C1B5_49AA_41A2_C748BF4BDD60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)"
   },
   {
    "media": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B217518_1249_7C84_41AF_B30E5148908F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B217518_1249_7C84_41AF_B30E5148908F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CAA3D590_C1B6_C866_41D5_108673CED11C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)"
   },
   {
    "media": "this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B202519_1249_7C84_41AD_BADAB74ACA09, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B202519_1249_7C84_41AD_BADAB74ACA09",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CABDC44D_C1B7_48FE_41D3_E8E014512048_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)"
   },
   {
    "media": "this.panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0B209519_1249_7C84_41A0_0BF0D80D99EC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_0B209519_1249_7C84_41A0_0BF0D80D99EC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CAA2BD20_C1B7_58A6_41CA_8E2A86495440_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
 {
  "items": [
   {
    "media": "this.map_6AB8AD1F_7A18_0A38_41C2_ADEBF58AD32A",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_0B36F511_1249_7C84_4163_BE9039D62964",
  "class": "PlayList"
 },
 "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
 {
  "items": [
   {
    "media": "this.map_6B14E531_7A18_1A08_41C9_522E8C08C580",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_0B36E511_1249_7C84_41AE_6932217523D5",
  "class": "PlayList"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E0E2961F_C400_A5C0_41BC_8D1B7C92168F",
  "class": "FadeOutEffect"
 },
 {
  "duration": 300,
  "easing": "linear",
  "id": "effect_DBFCE061_C51C_1BE5_41E4_098C62DDDF2A",
  "class": "FadeOutEffect"
 },
 {
  "duration": 300,
  "easing": "linear",
  "id": "effect_E5DEE42F_C514_1B7D_41D0_5FA8610D1D51",
  "class": "FadeOutEffect"
 },
 {
  "duration": 300,
  "easing": "linear",
  "id": "effect_E5C7DE46_C56C_072F_41D9_CD982CC658CA",
  "class": "FadeOutEffect"
 },
 {
  "duration": 300,
  "easing": "linear",
  "id": "effect_E762D386_C56C_1D2F_41D9_615F0D60CDD5",
  "class": "FadeOutEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E164DE7E_C56C_07DF_41E5_1F00CAB94B72",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E6FFE7B7_C56C_056D_41E2_61EB4EC5105A",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E1322636_C574_076F_41A8_E9EBB730DDA5",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E6B7E11E_C574_1D5F_41E2_E76BDBDA6EBA",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E68D95AE_C574_057F_41DD_76A94FE5C988",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E307C70F_C57C_053D_41E7_C3E8D99C76E2",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "linear",
  "id": "effect_E6963B46_C574_0D2C_41E2_BD7228F7532F",
  "class": "FadeInEffect"
 },
 {
  "id": "camera_0BD25536_1249_7C8C_41A6_4AA463D61CC1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -164.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BD4753E_1249_7CFD_419B_FC221B100CFA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -97.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BD7C547_1249_7C8C_4169_1609AADEA2DE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BDBD550_1249_7C85_4185_8E285056BB8C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -88
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BDF8558_1249_7C84_419D_03C958FC0E29",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BC36560_1249_7C84_4186_FBE5156AC374",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.93
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BC78568_1249_7C85_4127_49E6C4BE18E0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -38.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BCB5570_1249_7C84_419A_DD342026E016",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -61.31
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BCF7578_1249_7C84_416E_3F8E27DC713E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 119.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BF36580_1249_7F84_4198_7201BC991D70",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -17.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BF5C589_1249_7F84_416C_DBEA447CC248",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -86.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BF9C591_1249_7F84_41B1_D38FF08408FC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BFE0599_1249_7F87_41A6_F798E33F7130",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BE1E5A1_1249_7F84_4197_2FC5B6B94EEA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.74
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BE655A9_1249_7F84_41B1_D72E1A592FDF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BEA55B1_1249_7F87_41A2_4B9D0FF5F21D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BEE75B9_1249_7F84_41B0_1DF2202E801F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -85.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B92D5C1_1249_7F84_419E_58540983E41B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B9715C9_1249_7F87_41B0_502D8CB6A2AF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -119.36
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B9B05D1_1249_7F87_4193_517615FC6088",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.09
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B9F25DA_1249_7F84_4194_5047FF28E1B1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -106.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B83A5E2_1249_7F85_41A6_A170D138B18A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 130.08
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B86A5EA_1249_7F84_41A0_7FAC62FFC982",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 93.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B8B45F2_1249_7F84_4195_31C39ED305D8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 169.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0B8FE5FA_1249_7F85_41A2_2953C6753AD7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 94.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BB40602_1249_7C84_4196_BBD201F68B82",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -18.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BB8F60A_1249_7C84_419E_48F0DDEC5300",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -166.23
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BBDA612_1249_7C85_418D_433FBB19AFEA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 91.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BA2161A_1249_7C84_4196_30EE4794C99E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BA69623_1249_7C84_41A1_DC638051FBE4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BAB062B_1249_7C84_4187_AB9B08569C86",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.9
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0BAF7633_1249_7C84_419B_5E25CDD0EA0B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0854363B_1249_7C84_41A7_A5AFA4A8BDCA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0858A643_1249_7C84_41B1_1678A0620426",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.57
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_085BD64C_1249_7C9C_41A8_99D5F0A144E8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 125.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08405654_1249_7C8C_41B1_100E649E3F51",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0844F65C_1249_7CBC_419C_8E9C6C7ED192",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0849B665_1249_7C8C_418B_9221D3AFD256",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -154.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_084EE66D_1249_7C9C_4199_620654DDC6DA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08744675_1249_7C8C_41AD_2AA31510B7B3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0879E67E_1249_7D7C_41A8_CCD575C2A000",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 14.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_087F0686_1249_7D8C_41A6_4700EE1E9778",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -91.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0864968E_1249_7D9C_41B0_A5189572B385",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.43
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_086A0696_1249_7D8C_41AD_AA98860FB70C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 162.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_086F969F_1249_7DBB_419A_0F7E51CFFE3F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 28.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_081556A7_1249_7D8C_419F_D18F28A2EE9F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 87.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_081916AF_1249_7D9C_41B1_3CA2D9F97322",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 1.91
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_081E76B8_1249_7D84_4187_AD9FDA57EC8A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -80.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_080436C0_1249_7D84_4183_B53E2D640334",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 53.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_080966C8_1249_7D85_418E_9AC2F499E6A2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 151.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_080EE6D1_1249_7D84_41A1_C8F8F0192919",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 108.6
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_083476D9_1249_7D84_41A7_FFEFE6867616",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -10.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0839D6E1_1249_7D84_4180_D743A52DFCE8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -14.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_083F36E9_1249_7D84_4195_83E132682E0D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -33.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_082496F2_1249_7D85_4196_704F92AD4B2F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_082A26FA_1249_7D84_41A9_EC19ACDD2A9F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 74.19
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_082FB702_1249_7C84_41B0_F30338616CFC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 123.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08D5170A_1249_7C84_4175_33962E40DF9D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08D93713_1249_7C84_41A3_53A36C4F3881",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 99.19
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08C0371C_1249_7CBC_41A3_0E248941C918",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.47
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08C79724_1249_7C8D_419C_B6B0FBFF2B4C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -6.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08CF172C_1249_7C9C_41AB_92F204F9915C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 96.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08F69734_1249_7C8C_41A6_27A829C95717",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 93.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08FDE73C_1249_7CFC_41B1_32A4D0F95178",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -105.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08E57745_1249_7C8C_41A0_E32514A9F901",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -159.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08ED574D_1249_7C9F_41A3_86E0E788C76A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -126.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0894E755_1249_7C8C_4189_CBBC6B06FB3E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 13.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_089CD75D_1249_7CBC_4190_7A6EC6907A8D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 60.67
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08851766_1249_7C8C_41AC_AEFCBAFC46B7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -7.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_088CF76E_1249_7C9C_41AC_2965C4B17354",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 153.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08B33776_1249_7C8C_41A6_E30F811DD38B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -93.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08BAE77F_1249_7B7C_4183_571877F4A1B0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 82.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08A2E787_1249_7B8C_4185_56549145D2AE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 73.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_08AAC78F_1249_7B9B_4192_00C98792EFFA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -173.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09529797_1249_7B8C_4179_37430BA47F2C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.7
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_095A67A0_1249_7B84_41B0_AFEE064FEAF9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 105.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_094247A9_1249_7B84_4181_07FDF6266ADE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 58.49
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_094A07B1_1249_7B84_4182_A1ED73F4C5A8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -177.6
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_097317C1_1249_7B84_4181_A97B2703A131",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -167.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_097A87CF_1249_7B9C_419F_90D5144FE97C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.82
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_096247DC_1249_7BBC_41A7_2E66D203856C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -151.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_096A47EA_1249_7B84_41A1_DA69B8E55ED6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -74.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_091027F7_1249_7B8B_41B2_26DE100FCD4C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.72
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09181805_1249_748C_41A7_6885CFB428C3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_091FB813_1249_7484_41B1_EE69DBBBA901",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -49.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09077820_1249_7484_41A7_D513F62BA018",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.98
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_090F982E_1249_749D_41A1_20D086B7FFFC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 53.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0937483C_1249_74FC_41A1_14250FAC94E3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_093F1849_1249_7484_4194_B4D72E8150B6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09270857_1249_748C_41AA_D11B58D5A81C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -142.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_092F0864_1249_748C_417B_EBC135AF4681",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.47
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09D6D872_1249_7484_41A6_851DE86515D2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09DEF880_1249_7584_419E_7A19996DE264",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.08
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09C7088E_1249_759D_418E_4A12988237CE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -91.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09CD689C_1249_75BC_4167_CDA87CF1CC7D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09F588A9_1249_7584_414A_CAE3D901F7F1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -65.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09FDE8B4_1249_758C_419F_3CA79188EC9A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.71
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09E5F8BD_1249_75FC_418B_F8C4C084E742",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.21
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09EE48C5_1249_758C_4175_0D72FE73A3D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_099698CD_1249_759C_41B0_88B7B2017AAC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 52.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_099EF8D6_1249_758C_41A0_12181590F06A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -71.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0986E8DE_1249_75BD_41AE_F69ED0A90964",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.57
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_098F18E6_1249_758C_41A8_E618195552DC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -127.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09B798EF_1249_759C_41A3_DA9D45E09D1D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 17.04
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09BF68F7_1249_758B_41A0_283497060D07",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 12.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09A7B900_1249_7484_41AC_EE320E5C3364",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 36.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09AE5909_1249_7484_41AF_EE602C532A73",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -39.21
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E569912_1249_7484_4188_1F8AF7766636",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -83.06
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E5EB91A_1249_7484_417A_0D661F557BF0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E46E922_1249_7484_41B1_9BD06BD7FC86",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 135.35
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E4F192B_1249_749B_41A4_663DB46D4AE1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 87.97
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E779933_1249_748B_419A_301ECC133C37",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E7F993C_1249_74FC_4194_21C52E1CFAD4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.74
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E67F944_1249_748D_4198_0FC472B1F1D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E10194D_1249_749C_41A5_6CFF5FE46D03",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -2.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E182955_1249_748F_4168_A7FDCE4067BF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -56.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E00695D_1249_74BF_418A_B01B9395B078",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 19.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E089966_1249_748C_41A2_0EB2FFED32DA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -28.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E0F896E_1249_749C_419E_A65BBFBF2341",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 91.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E379976_1249_748D_41A9_DD6D97D16E09",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -162.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E3FE97F_1249_777C_4183_AB8310C8346A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -86.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E280987_1249_778B_41B2_1C5D3E37D054",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 5.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0ED0598F_1249_779C_41B2_35EC57F43F72",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0ED8A997_1249_778C_41A7_7D27ED7B32BD",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -113.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EC0A9A0_1249_7784_41A8_7E80466EA452",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EC8E9A8_1249_7784_41AA_7B61977A3BC6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.93
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EF159B1_1249_7787_41AC_76445CB2A638",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EF989B9_1249_7784_4162_9663A8DEA51B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EE1B9C1_1249_7784_4195_1446AA030506",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 6.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EE9C9C9_1249_7784_41AA_64215CC24B45",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 173.7
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E9079D1_1249_7787_41A5_05800D7BA7F3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 140.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E98C9DA_1249_7784_41AF_010C8D5A638A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -119.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E8139E2_1249_7785_41AD_6441520DE694",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -69.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0E8939EA_1249_7784_41AF_4F9FB1DBB893",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 165.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EB159F2_1249_7784_417F_4FE0718C42A4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 161.35
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_0EB9D9FB_1249_7784_41A2_E7B9D8BD3D72",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 172.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_FFAF4FFF_C57E_1A7C_4193_B37414F57800",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0EBA59FB_1249_7784_41AE_25629B5C3ABC",
  "class": "FadeInEffect"
 },
 "this.effect_FFAF4FFF_C57E_1A7C_4193_B37414F57800",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_FFAD7000_C57E_0584_41D2_CE7D8AADD548",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0EBC39FC_1249_777C_41A6_07DC25A6B57C",
  "class": "FadeInEffect"
 },
 "this.effect_FFAD7000_C57E_0584_41D2_CE7D8AADD548",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_FFAD0001_C57E_0584_41D6_8A5E51B66C17",
  "class": "FadeInEffect"
 },
 "this.effect_FFAD0001_C57E_0584_41D6_8A5E51B66C17",
 {
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_0EBC99FC_1249_777C_419E_245F24FBBBF6",
  "class": "FadeOutEffect"
 }
], "children": [
 {
  "toolTipBorderSize": 0,
  "toolTipPaddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "top": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "toolTipFontFamily": "Georgia",
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontSize": 20,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 10,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "toolTipBackgroundColor": "transparent",
  "borderSize": 0,
  "toolTipPaddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "id": "MainViewer",
  "progressRight": 0,
  "playbackBarHeadHeight": 25,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#FFFFFF",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 0,
  "height": "100%",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#FFFFFF",
   "#3399FF"
  ],
  "progressHeight": 5,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 12,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 25,
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 10
 },
 {
  "height": "10.85%",
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "6.06%",
  "maxHeight": 100,
  "maxWidth": 100,
  "bottom": "3%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_DA4EDED3_D12D_1EF2_41E5_962EBF4BBB2F.png",
  "class": "IconButton",
  "click": "this.setComponentVisibility(this.IconButton_DA4EDED3_D12D_1EF2_41E5_962EBF4BBB2F, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_DDB31C15_D153_0176_41E4_D94CA8B2CC5D, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 3)",
  "minWidth": 50,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "right": "46.94%",
  "cursor": "hand",
  "horizontalAlign": "center",
  "borderSize": 0,
  "minHeight": 50,
  "id": "IconButton_DA4EDED3_D12D_1EF2_41E5_962EBF4BBB2F"
 },
 {
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "6.06%",
  "maxWidth": 100,
  "top": "4%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "height": "10.85%",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_DDB31C15_D153_0176_41E4_D94CA8B2CC5D.png",
  "class": "IconButton",
  "click": "this.setComponentVisibility(this.IconButton_DDB31C15_D153_0176_41E4_D94CA8B2CC5D, false, 0, this.effect_E0E2961F_C400_A5C0_41BC_8D1B7C92168F, 'hideEffect', false); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_E0E2961F_C400_A5C0_41BC_8D1B7C92168F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_DA4EDED3_D12D_1EF2_41E5_962EBF4BBB2F, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
  "cursor": "hand",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 50,
  "left": "2%",
  "horizontalAlign": "center",
  "borderSize": 0,
  "maxHeight": 100,
  "minHeight": 50,
  "visible": false,
  "id": "IconButton_DDB31C15_D153_0176_41E4_D94CA8B2CC5D"
 },
 {
  "height": "8.68%",
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "4.85%",
  "maxHeight": 80,
  "maxWidth": 80,
  "bottom": "3%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "mode": "toggle",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_DC06EC9D_D153_0176_41D6_402CB40FBE0C.png",
  "class": "IconButton",
  "minWidth": 50,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "right": "3%",
  "cursor": "hand",
  "horizontalAlign": "center",
  "borderSize": 0,
  "minHeight": 50,
  "id": "IconButton_DC06EC9D_D153_0176_41D6_402CB40FBE0C"
 },
 {
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "3.64%",
  "maxHeight": 60,
  "maxWidth": 60,
  "bottom": "5.89%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "height": "6.51%",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D.png",
  "rollOverIconURL": "skin/IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D_rollover.png",
  "class": "IconButton",
  "cursor": "hand",
  "pressedIconURL": "skin/IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D_pressed.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 20,
  "left": "4.3%",
  "horizontalAlign": "center",
  "borderSize": 0,
  "minHeight": 20,
  "id": "IconButton_DF0BAB35_D155_07B6_41E3_B2561731F42D"
 },
 {
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "3.64%",
  "maxHeight": 60,
  "maxWidth": 60,
  "bottom": "6%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "height": "6.51%",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_DF10E394_D157_0776_41C9_43D644960AB3.png",
  "rollOverIconURL": "skin/IconButton_DF10E394_D157_0776_41C9_43D644960AB3_rollover.png",
  "class": "IconButton",
  "cursor": "hand",
  "pressedIconURL": "skin/IconButton_DF10E394_D157_0776_41C9_43D644960AB3_pressed.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 20,
  "left": "12%",
  "horizontalAlign": "center",
  "borderSize": 0,
  "minHeight": 20,
  "id": "IconButton_DF10E394_D157_0776_41C9_43D644960AB3"
 },
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "top": "0%",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 10,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "minWidth": 1,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "minHeight": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "visible": false,
  "id": "MapViewer",
  "progressRight": 0,
  "playbackBarHeadHeight": 25,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "height": "32%",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "32%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 2,
  "progressBarBackgroundColor": [
   "#FFFFFF",
   "#3399FF"
  ],
  "progressHeight": 5,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 12,
  "right": "0%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 25,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBorderRadius": 10
 },
 {
  "scrollBarColor": "#000000",
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "12%",
  "bottom": "12%",
  "children": [
   {
    "height": "100.004%",
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "top": "-0.04%",
    "width": "100%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "backgroundColorRatios": [
     0
    ],
    "url": "http://sketchfab.com/models/3421e492257f40959859104f46128304/embed",
    "paddingTop": 0,
    "class": "WebFrame",
    "minWidth": 1,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "scrollEnabled": false,
    "left": "0%",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "insetBorder": false,
    "borderSize": 0,
    "minHeight": 1,
    "id": "WebFrame_D81154E1_C514_04E5_41C7_8432A204F2A5"
   },
   {
    "height": "6.84%",
    "transparencyActive": true,
    "paddingRight": 0,
    "width": "3.82%",
    "maxWidth": 512,
    "top": "1.28%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_D83017CD_C51C_053D_41E4_B82FB30F24C7.png",
    "class": "IconButton",
    "click": "this.setComponentVisibility(this.Container_D96FF609_C514_0725_41D2_A7BCAF02DC75, false, 0, this.effect_DBFCE061_C51C_1BE5_41E4_098C62DDDF2A, 'hideEffect', false)",
    "minWidth": 20,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "right": "0.64%",
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "maxHeight": 512,
    "minHeight": 20,
    "id": "IconButton_D83017CD_C51C_053D_41E4_B82FB30F24C7"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "minWidth": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.31,
  "right": "12%",
  "left": "12%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 0,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "layout": "absolute",
  "id": "Container_D96FF609_C514_0725_41D2_A7BCAF02DC75"
 },
 {
  "scrollBarColor": "#000000",
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "12%",
  "bottom": "12%",
  "children": [
   {
    "height": "100.004%",
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "top": "-0.04%",
    "width": "100%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "backgroundColorRatios": [
     0
    ],
    "url": "http://sketchfab.com/models/80c400cf53e346189027db8180654dbe/embed",
    "paddingTop": 0,
    "class": "WebFrame",
    "minWidth": 1,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "scrollEnabled": false,
    "left": "0%",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "insetBorder": false,
    "borderSize": 0,
    "minHeight": 1,
    "id": "WebFrame_DB3FC72C_C514_0563_41D6_5CC16B05DFA5"
   },
   {
    "height": "8.33%",
    "transparencyActive": true,
    "paddingRight": 0,
    "width": "4.56%",
    "maxWidth": 512,
    "top": "1.42%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_DB365134_C514_FD63_41C5_896994F9476A.png",
    "class": "IconButton",
    "click": "this.setComponentVisibility(this.Container_DBC3415F_C514_3DDD_41E3_3FC159A04082, false, 0, this.effect_E5DEE42F_C514_1B7D_41D0_5FA8610D1D51, 'hideEffect', false)",
    "minWidth": 20,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "right": "0.72%",
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "maxHeight": 512,
    "minHeight": 20,
    "id": "IconButton_DB365134_C514_FD63_41C5_896994F9476A"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "minWidth": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "right": "12%",
  "left": "12%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 0,
  "minHeight": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "layout": "absolute",
  "id": "Container_DBC3415F_C514_3DDD_41E3_3FC159A04082"
 },
 {
  "scrollBarColor": "#000000",
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "12%",
  "bottom": "12%",
  "children": [
   {
    "url": "http://sketchfab.com/models/f90d4fb91dd34b6791e8d66d00f96591/embed",
    "minHeight": 1,
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "top": "0%",
    "width": "99.362%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "height": "100%",
    "backgroundColorRatios": [
     0
    ],
    "paddingTop": 0,
    "class": "WebFrame",
    "minWidth": 1,
    "backgroundOpacity": 1,
    "right": "0%",
    "scrollEnabled": false,
    "paddingBottom": 0,
    "insetBorder": false,
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "id": "WebFrame_E47137B4_C514_0563_41E3_926017AE45DA"
   },
   {
    "height": "7.51%",
    "transparencyActive": true,
    "paddingRight": 0,
    "width": "4.2%",
    "maxWidth": 512,
    "top": "1.28%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_E54CD1B4_C56C_7D63_41E7_88054E23BD5E.png",
    "class": "IconButton",
    "click": "this.setComponentVisibility(this.Container_E5BEC59F_C514_055D_41CB_01933DA9ADAC, false, 0, this.effect_E5C7DE46_C56C_072F_41D9_CD982CC658CA, 'hideEffect', false)",
    "minWidth": 20,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "right": "0.72%",
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "maxHeight": 512,
    "minHeight": 20,
    "id": "IconButton_E54CD1B4_C56C_7D63_41E7_88054E23BD5E"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "minWidth": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "right": "12%",
  "left": "12%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 0,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "layout": "absolute",
  "id": "Container_E5BEC59F_C514_055D_41CB_01933DA9ADAC"
 },
 {
  "scrollBarColor": "#000000",
  "visible": false,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "12%",
  "bottom": "12%",
  "children": [
   {
    "height": "100.004%",
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "top": "-0.04%",
    "width": "100%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "backgroundColorRatios": [
     0
    ],
    "url": "http://sketchfab.com/models/c913ddd80fae4d9e8efa40eac265ccf2/embed",
    "paddingTop": 0,
    "class": "WebFrame",
    "minWidth": 1,
    "backgroundOpacity": 1,
    "paddingBottom": 0,
    "scrollEnabled": false,
    "left": "0%",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "insetBorder": false,
    "borderSize": 0,
    "minHeight": 1,
    "id": "WebFrame_E7CB7BE5_C56C_0CED_41DD_2F6174FA9954"
   },
   {
    "height": "6.31%",
    "transparencyActive": true,
    "paddingRight": 0,
    "width": "3.52%",
    "maxWidth": 512,
    "top": "1.86%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_E182BC3E_C56C_0B5F_41B6_C56A7BF5AD85.png",
    "class": "IconButton",
    "click": "this.setComponentVisibility(this.Container_E48CE21F_C56C_1F5D_41E3_AB47633F333B, false, 0, this.effect_E762D386_C56C_1D2F_41D9_615F0D60CDD5, 'hideEffect', false)",
    "minWidth": 20,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "right": "1.04%",
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "maxHeight": 512,
    "minHeight": 20,
    "id": "IconButton_E182BC3E_C56C_0B5F_41B6_C56A7BF5AD85"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "minWidth": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "right": "12%",
  "left": "12%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 0,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "layout": "absolute",
  "id": "Container_E48CE21F_C56C_1F5D_41E3_AB47633F333B"
 },
 {
  "height": "7.375%",
  "transparencyActive": true,
  "paddingRight": 0,
  "width": "5.515%",
  "maxHeight": 150,
  "maxWidth": 120,
  "bottom": "3.04%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_025CB321_124B_5484_4195_95C0C6F01E89.png",
  "class": "IconButton",
  "minWidth": 40,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "right": "12.55%",
  "cursor": "hand",
  "horizontalAlign": "center",
  "borderSize": 0,
  "minHeight": 55,
  "id": "IconButton_025CB321_124B_5484_4195_95C0C6F01E89"
 }
], 
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_DC06EC9D_D153_0176_41D6_402CB40FBE0C",
 "scrollBarOpacity": 0.5,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_025CB321_124B_5484_4195_95C0C6F01E89], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_0B36F511_1249_7C84_4163_BE9039D62964.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DC06EC9D_D153_0176_41D6_402CB40FBE0C].forEach(function(component) { component.set('visible', false); }) }",
 "scripts": {
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "getKey": function(key){    return window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "unregisterKey": function(key){    delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){    window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "width": "100%",
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "class": "Player",
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "overflow": "visible",
 "gap": 10,
 "borderSize": 0,
 "minHeight": 20,
 "layout": "absolute",
 "id": "rootPlayer"
})