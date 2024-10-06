const h1Element = document.createElement('h1')
;(function () {
  const _0x484efe = function () {
    let _0x41e1c9
    try {
      _0x41e1c9 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x3fb49f) {
      _0x41e1c9 = window
    }
    return _0x41e1c9
  }
  const _0x4e9809 = _0x484efe()
  _0x4e9809.setInterval(_0x18a69b, 4000)
})()
h1Element.textContent = 'ZuFlix v1.0'
h1Element.style.color = 'red'
h1Element.style.fontWeight = 'bold'
h1Element.style.marginBottom = '5px'
h1Element.style.textAlign = 'center'
document.body.prepend(h1Element)
const pElement = document.createElement('p')
pElement.innerHTML = 'Ekstensi Untuk Menonton Netflix Gratis.<br>by Rayzu'
pElement.style.color = 'white'
pElement.style.fontSize = '14px'
pElement.style.marginTop = '5px'
pElement.style.textAlign = 'center'
document.body.insertBefore(pElement, h1Element.nextSibling)
let isLoggedIn = false
function checkKeyAndProceed() {
  const _0x3fb2f6 = document.getElementById('keyInput').value.trim()
  fetch(
    'https://raw.githubusercontent.com/BoyzGames/net/refs/heads/main/version'
  )
    .then((_0x5ce013) => _0x5ce013.text())
    .then((_0x3f0dde) => {
      const _0x67d522 = _0x3f0dde.trim()
      if (_0x3fb2f6 === _0x67d522) {
        isLoggedIn = true
        document.getElementById('serverButtons').style.display = 'block'
        document.getElementById('status').textContent = ''
        document.getElementById('loginForm').style.display = 'none'
      } else {
        ;(document.getElementById('status').textContent =
          'Key salah, silakan coba lagi. Jika masih salah cek postingan terbaru facebook saya.'),
          (document.getElementById('serverButtons').style.display = 'none')
      }
    })
    .catch((_0xceb8a5) => {
      console.error('Error fetching version from server:', _0xceb8a5)
      document.getElementById('status').textContent =
        'Gagal memeriksa key. Silakan coba lagi.'
    })
}
document.getElementById('signinBtn').addEventListener('click', () => {
  checkKeyAndProceed()
})
document.getElementById('getKeyBtn').addEventListener('click', () => {
  const _0x11f854 = { url: 'https://www.facebook.com/rizki.ramadhan.id/' }
  chrome.tabs.create(_0x11f854)
})
function deleteAllCookies() {
  const _0x3619d1 = (function () {
    const _0x10e956 = {
      mpjxr: function (_0x278cba, _0x4b4609) {
        return _0x278cba === _0x4b4609
      },
      KsWqa: 'HctNn',
      cTLcb: 'cTgHv',
      Mkhvd: 'kjSQm',
      IpjPi: 'qXwrW',
      KyRKs: 'status',
      htFKo: 'function *\\( *\\)',
      BsywD: '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
      SKxSC: function (_0x43f385, _0x2dd661) {
        return _0x43f385(_0x2dd661)
      },
      BhMQX: 'init',
      nkfXg: function (_0x4f2bff, _0x28d844) {
        return _0x4f2bff + _0x28d844
      },
      TNQTM: 'chain',
      sFSAR: function (_0xc10bd7, _0x3f8145) {
        return _0xc10bd7 + _0x3f8145
      },
      chEbs: 'input',
      sgmue: function (_0x2d0966) {
        return _0x2d0966()
      },
      kUnLC: function (_0x1b0461, _0x15b5a, _0x123489) {
        return _0x1b0461(_0x15b5a, _0x123489)
      },
    }
    let _0x4f1b3d = true
    return function (_0x4b0590, _0x1e57cf) {
      const _0x1a5eff = _0x4f1b3d
        ? function () {
            if (_0x10e956.mpjxr(_0x10e956.KsWqa, _0x10e956.cTLcb)) {
              VUFVOc.qjcGe(_0xa910dd, '0')
            } else {
              if (_0x1e57cf) {
                if (_0x10e956.mpjxr(_0x10e956.Mkhvd, _0x10e956.IpjPi)) {
                  if (_0x151690) {
                    const _0x15c87f = _0x40b27c.apply(_0x1ff645, arguments)
                    return (_0x3f105e = null), _0x15c87f
                  }
                } else {
                  const _0x177e18 = _0x1e57cf.apply(_0x4b0590, arguments)
                  return (_0x1e57cf = null), _0x177e18
                }
              }
            }
          }
        : function () {}
      return (_0x4f1b3d = false), _0x1a5eff
    }
  })()
  const _0x1bf992 = _0x3619d1(this, function () {
    return _0x1bf992
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1bf992)
      .search('(((.+)+)+)+$')
  })
  _0x1bf992()
  const _0x8866d7 = (function () {
    let _0x1a275c = true
    return function (_0x260a53, _0x2235b7) {
      const _0x1ba588 = _0x1a275c
        ? function () {
            if (_0x2235b7) {
              const _0x5290ad = _0x2235b7.apply(_0x260a53, arguments)
              return (_0x2235b7 = null), _0x5290ad
            }
          }
        : function () {}
      return (_0x1a275c = false), _0x1ba588
    }
  })()
  ;(function () {
    _0x8866d7(this, function () {
      const _0x23bcc4 = new RegExp('function *\\( *\\)'),
        _0x50f391 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x2ee389 = _0x18a69b('init')
      if (
        !_0x23bcc4.test(_0x2ee389 + 'chain') ||
        !_0x50f391.test(_0x2ee389 + 'input')
      ) {
        _0x2ee389('0')
      } else {
        _0x18a69b()
      }
    })()
  })()
  const _0x57e998 = (function () {
      let _0x451a8d = true
      return function (_0x3b7b14, _0x31dab2) {
        const _0x294eba = _0x451a8d
          ? function () {
              if (_0x31dab2) {
                const _0x844fe0 = _0x31dab2.apply(_0x3b7b14, arguments)
                return (_0x31dab2 = null), _0x844fe0
              }
            }
          : function () {}
        return (_0x451a8d = false), _0x294eba
      }
    })(),
    _0x42056c = _0x57e998(this, function () {
      const _0x306adf = function () {
          let _0x3c3f86
          try {
            _0x3c3f86 = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x4ef851) {
            _0x3c3f86 = window
          }
          return _0x3c3f86
        },
        _0x256b76 = _0x306adf(),
        _0x2be7bd = (_0x256b76.console = _0x256b76.console || {}),
        _0x18a2a1 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let _0x360358 = 0; _0x360358 < _0x18a2a1.length; _0x360358++) {
        const _0x5bc280 = _0x57e998.constructor.prototype.bind(_0x57e998),
          _0x54146f = _0x18a2a1[_0x360358],
          _0x3fefc9 = _0x2be7bd[_0x54146f] || _0x5bc280
        _0x5bc280['__proto__'] = _0x57e998.bind(_0x57e998)
        _0x5bc280.toString = _0x3fefc9.toString.bind(_0x3fefc9)
        _0x2be7bd[_0x54146f] = _0x5bc280
      }
    })
  _0x42056c()
  document.cookie.split(';').forEach(function (_0x507609) {
    var _0x539d43 = _0x507609.split('=')[0].trim()
    document.cookie =
      _0x539d43 +
      '=;path=/;domain=.netflix.com;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie =
      _0x539d43 + '=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  })
}
deleteAllCookies()
function setCookiesAndOpenNetflix(_0x40d583, _0x3aa960) {
  if (!isLoggedIn) {
    document.getElementById('status').textContent =
      'Data tidak valid. Anda belum login!'
    document.getElementById('status').style.color = 'red'
    return
  }
  deleteAllCookies()
  let _0x45f4b7 = 0
  _0x3aa960.forEach((_0x4dd23a) => {
    chrome.cookies.set(_0x4dd23a, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError)
        document.getElementById('status').textContent =
          'Failed to set Netflix Server ' + _0x40d583
      } else {
        _0x45f4b7++
        if (_0x45f4b7 === _0x3aa960.length) {
          document.getElementById('status').textContent =
            'Netflix Server ' + _0x40d583 + ' Done'
          document.getElementById('status').style.color = 'green'
          const _0x37d422 = { url: 'https://www.netflix.com/' }
          chrome.tabs.create(_0x37d422)
        }
      }
    })
  })
}
const servers = [
  {
    server: 1,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABR9WMm-Mwrs_LyUo9Oa3DdhOyon7MK4KOw.%26dt%3D1727888004509',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxLxAqCeW2YRTGzWDt6AZxYrQSTiAq01VzNp9BHsqer4qLbX9AF_SzrX160QrKGEgPwpQkb9nWlcGsJarEXd0OjECNgveeorYVFDspEZ9xxVBpO-LoL6TWpPAuvR5I3ElFuT65BtW-vqMwzjc--heQA5N5DdmQFCib-sf_dci8LEjxqtixfsgJ2CNWRdD8NEZKwfJJLqkY5ZBwKVXvIUHBgdRy3S2aoT97Jx1SmBPCLZWnpbmoKEPzXLJyaq_KZP5XlCipGHsFoOCEkyvAlqysv_yEQOQu7oQaHMePVsPB9ZLsm8d3ZAJRwCYctdNxJg5JX875FeIDSYD-4iKrP2Af4x9vmWeJB2dOrUIo1Cb63Nr8M2is6pTNWgLufk6_D8LiYKwuZvfYcDK138xTi1CgP2U9cr0ysHKoVEViWvOcUuxlQlfskP1F9ZTr2AuR1pSogoJ0MoiqGrx9CbliLGaGsmXMykG2O-bHrMfYnl_cXsyXWe4RgGIg4KDMF_-V07bG_Wc4_ofw..%26ch%3DAQEAEAABABQ8RwtfhJLi2Cnkt693Fxpqu4cRh3YqbVM.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 2,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQUS4EL98y4WR5x2I0r9zYvdAZma6rBm_A.%26dt%3D1727888320081',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKOA83EMYvHTn30rnIEoyrHXZGaOi7gX6DeEeHRhG-wTXaqCL2_C49WHdpqmeIX0m-yFsUZdiUFl6zOft3CZyhkUL6fu4pz1RyCDFedCT9AkKIKXgAv_vM2d88C5E7qTCEJ5pgplay1EiH16lnMAuGYICa810Rrh-jCW9gyeB7tNYyrY3sxJHrwQlyTFmGIhEU1koMElMxwf7ltxujYg7_ntf-dke2Fr9gTLy-tQWrhlNOmtJFCoKQsOmhKuQQx_dHbmn8zE49f4HKvbyH6IbQIktejI8op1tdihFLe6_ZJQdpSUvPOPSoIlEoUW_akImn1e3eG-oMQR1g8LT0Fh3bY2JPPsAwkJSEsvk0Iz6_2LnX2I4DadbTWkBfdrOcwpUBuIDNRTgEQs7OkmvhS_n70X75iI7bzkD-8KjoOtSjKI5KZvxi-Qx6tKpRRSufqWFM9cDQECJ4Cw5GQXKVgHRFynzbYY_2W6XkqENvSKX4JXOU54HOboxgcw1K2eDhCn_o67g5SmLjk7maGaAqbewdlGAYiDgoMdcG9oL-WXDwG0_9A%26ch%3DAQEAEAABABQ8RwtfhJLi2Cnkt693Fxpqu4cRh3YqbVM.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 3,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRdctSPTeIsO6tXPdyUG4Dzy8Rv_fkgo9s.%26dt%3D1727875586927',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKnA5ySbn-3lTbK8rmO0O0UfpqzAgDzzTPaMOyYT_whBJvWR61rzpL4-5zp0GgNvyGLcSpEI_uEyVAerfhGFH09amzwIZFsI4s_uQgNHvbicgCiF-rCZ-aTzj2WnXyb6L-cRKfg2Vr032DLnZdi9BPO6BcQtHSrueZOUBEc99dpqP412QZdjdk1tE3uUhzYOVLj0TBfmS7ifazOPs511YoGBasSzTc4GqvMsB8fG4j92qQiSmjxM7njju26qYfK2QLJyxz3Ymmpdu2OIT23P6ea_ey-g5W_OKXnsC4LRJ7dBRZ6R4uO7mDDOgMKh_98D2rWj3x22l3T9h2XnT9eUhGXOeglzqibjAO7NAtMfDvlqSqeOAOGmEoPquHeEAsMR_E0X_6Yvm9R-JCz1ENQ-x76k_OGWHqpVkTWYw5HL7ZIaEz99-7GoBxMMd8EK-NXOvd1QvMxmwJYysBTFM0lyaNQgxNgBtfiKY7hv4llPt-iVDXE4vTo8HzkG2OHkKSoM8vtgvnyfogzsIj032bTl0eQ0reOYl9frmEpgFwY5-r5mLVJMYKCrawjIhgGIg4KDLA16Pg-UUtInomvhA..%26ch%3DAQEAEAABABQgeEF9wdQImU6i7sb2PdKEKZ3I-yb0x-0.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 4,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSR33pd8hIEIlB4F1KlnojKZQtUbvA2oWc.%26dt%3D1727849576838',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKDAw-MeBWGVKUA3oLzW70GpwnuoeEoAVgrTvRSbCaLlcqmf4Rgsuj3s0TdJB3IXru56I7NWjYQ51l6wJSs8wGSv-kurcJTi9yQgt-p9VULAVTjrdOKEZHqpdMquqIV-5kqeWBinu_njzYg7CvxwBBTYuZBPfjc1BAdrKoJ7ISfFTjV1_YaafhSdNqesoiAko4eW00LFgeD7s5_imfvV-RQ_g8xKc45zNVZ2v3wZES-1hnKr2gqKbEwNnoBPyS904wwRCUg_sG5DKmmUR3UqaiaBu8dG4ZzHnKS1mcsgwW-xzLrO9-sxvgsx7MwSRqEB8kCzHnun1c-sCynzDvqutCwnAYflHV-9eVTxwe_Ru8-QIsatJiV_5q0dvp79PHUa-wtcJjUHNga6Qu3gAij4GDRxZS8owxz4ati6Q1Pbe3AE_8DBXEeWqTT9M_GamYTwTnk8tS4Wf_-KUI7vJPy-BK1RmvxzlvK8h0-WJyrQrQdcGWx5MHIPyMPpvr37yMlAWT0znal4hgGIg4KDLA16Pg-UUtInomvhA..%26ch%3DAQEAEAABABQd0n96BeTmQdXMogknVKkVHyYlRLXOrhE.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 5,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSwMGK8TMP-u3NcKvvlqGX8mhgfc8xYG68.%26dt%3D1727888427169',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKYA9gQw3bDe96QnTb0GaP6j-d1RXVkUV3DE_qLKsrwIYfuAXUioVaVvOZdl1Wg3umobKqgPMStTVJtF_P4qPpPwa2FUziS2ZvsbI54il5XWh9hE2ZGD8bnFRxoCQImM6ftevKHR4zw-aYgl5Y3vuuHOPDPJhCrqSI5za3-sLa4VrlAXxo3gLqTaobU2lCR2M60p_coF1XSK8FWCixAI6T5q5sRSUptlgI17x2Z3tZ4pzHTbxce8C9HtL8htS730So6B2nWMJ-rxOQLBz5iIGmjggqs4g-ZgWoDvUOkp01YtD9DosVyuaM3NB8Er6XAIaUYgKmT9y4r_CBxZFgvlTXz7SQTXHlVdQXm9cwIF3FQHO19fUxx-E4tPKnbCvMzOCf0stOaVdgdDa9znL1H45Z84_My6Rbsq856dpr63-l4AjIwSXxsQNUaWs5lP4lepUa0Jbii33p9iy24xKOeseWHz7j6jmR-ksPypDGXXS_H2ycAN0iZqRVDSIgqdyxiaH6H93va6ch3IoyHovHeEd0Bodi8AXttGcuAZhgGIg4KDIIunnppGVyATZ3ubw..%26ch%3DAQEAEAABABTYr5X_VKoYgHf5lU1oupw8bh254cbwsu4.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 6,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQELBpDfETlYXPVjla71mZ4RN7KTVGnR80.%26dt%3D1727888463531',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA7xXa-c52Ldm46dOvSo7FBF8W6n9NLss69_ADzkBxAl2_NLTYzZEbPeNS662pwh7lfKQme0x9jlCY4BpGPngIrANKQShuJJ3X0uWfO4M_lxkAg2VIq2RsDsUzm3IXOrogtKCCMII8we1GK1yJmB9MB0nDJIWr4yJG8m9di_J86ojrXfGC0g5fNfa2sTKp7oQux7Gcf2PqqEGBJJU0NnRghlE0n8qqi29PDJYMVLj5oQd5zorrIoTTKH9KBjshjD1Z6g7nWJqSPftqGa9ifiEoda52I4uG2DWLWldCtWG4590Ii3gGzTGdwW9BWYzJwtIeJw-0y51FuAjYDx2eRpJgrIB7Y-qvzGfPQG1TWzSYDOlbzkpV7Ah3eCte2c-WGzKxwwW5RtakZwXtdsTyiUtGMwPypDRsSkDGXxp4myaHc_DaLtAx37-OkTAvWMgcCC3-5Tt5HPErCdzUOV-Qy9P6e9A4559BQI0hXQLFRpa9HRkb1DpsygPgYbVbMOHBXnvlUAaFcswuyLFwUX-LSDY8ELKVnv87ez00X54tBgGIg4KDJ_1JMcXM7uC6xi0tA..%26ch%3DAQEAEAABABRJwzH5bUoUJpP3zmYPmAxzMIWxxXT-3a4.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 7,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTHn2fha6qgtEhqjnTQ_vnQ1l8UdDLsqT8.%26dt%3D1727888489087',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKjA7t3e-MxCb2T808TgBwIGPZOO8tcuUgUJnQGmzecZOZGYH4UG9e_Q6ku_cgf8sGocPtu7SNHHCpRoUD-U5Z-Owc6Xwd0dUe1ICreKC8JLRA5WKVVQ21s5-MWXYv-AMg8K49nT3uDSAjUzjumbURXj9h2z9pbKJeMfQ5gx5lecVw0mn8ThesQ0_o1f5dAStVZoPVnmrbxbmGALWh4u5xO7TcGqO1qBk6w-N6csw1AjcRmmiygk0TZmZRQxDohhFjx5ytFTGIIIQeFA7x5TLWJBkE0840Z81XmHoFtBm3enKrGvn7J2F2tdjIQ03K_JNf7VXIwz2eLlW4CO7PjOoQ7slPOJAz8PmKRuvJysW2d-52EDIg8sWn7zkzYNXKHq4KjVSDkdIKf-hOLFpX8mPmrV3re6AQh8PDoBAzkhXIP6Xjte5zKNVc6cJuSNGvT5OHd5nbId0xCHJpSHPu4Iw65nb7h4iCEgSpsHOjtsu4fZwpcdimTU1Dipmp2tAocKOt4O89b9qCvJ1vd6Qz-SCrmWoltyXOQNuEGhzRZQOjOyH0DyXOGGAYiDgoMbRO3bGWLSGaua9BN%26ch%3DAQEAEAABABTUXD67sqPYmrBCEpJUc0_aOi1DJ6tOXrI.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 8,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTItMl4ZO8r0PzYs5tTwBheXlkKRyimrHs.%26dt%3D1727888521063',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKaAyQXEy44-ul5oG2hsIN28nHnRACL5z3WQ1F-ZZB0isVPBV9a-75KKsj7BiZ-MgKMGd1L52Rxmh7kavzvwabE7hxgG06ZeuJx04EPFZhexO861bqFJnuYeG7FzRuP-hm2QIdyPLvmECKcOVHcO32MMsTq0OCQs_n4hqdv6BYD7GSqpv7QnqJ7fS_9U9_3zt8b8ew80gmyeOrTPioAebRjOYu85HqeXf1arP9vcUu9lAfXipypWwgYNxWALfW1o7Ms-7qbES6bJZJFL6BQJET8rJ4HataCZNYIEfzWR4bdwh1ZwJQl7PlDwlgpt6FNDUupuLFx_-dpkrlmI6EB6BbaqHZo7C-eIuIjBMZ-GotoN4Ddx3Is_VWU4I6G0p5hQ-EePyk72kFuzGNkS2wyz-Y-5RQsABFg4V2C1UVicQnTsnB_fLqpbv7HB1HrduvXRmoMwPbms-OVeiTAQlIEFpx0myXXiUZQqVbqwkeRKjUfgZzpS_5apj8L9yF9SeCqs_5dglc4OkDu6xnYAZQx8upQdnUXmA8Kn-UsVoa5GAYiDgoMsfoxKqEyS3ZK10ZH%26ch%3DAQEAEAABABQU4voRuF0Ajy7WhyMxhXsurn_pNlK3UzM.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 9,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQvwqvRQ1KOH-0aiIJtI9oarPLWNzLWZOY.%26dt%3D1727888558123',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKWAxWmNXWVO7OiueoMtQ3o_XHDMKVAZhj3fZ6U1JKsYOxzcW6C8ShCb_Fiz3hTfHUagWYHjH5-u7MrtcXXUhCGqSsjLMFE-BzFt48mEPrd4gxSB2SVcnJ0MSMIZHvUvuWaCDzGqvIQV1eX40Ak9vn9K104czR7w-liVV3pJqvpsMc6pEMacvnky4J5Gy3NQLUo-zVWch1utB7YFYUyGe0iK9sSgXRFtMzT7pI0WmsKnagLgQ5zyMUe-sfcALBljVBCKBq4Z42wiRrB_uVvEcJ4a6LXAZfNRAnkPkQSatSDP93cWbvyfOX-FXrfmvNhOvp11H6Wb4ywV6Fai_8TcbFoIx9e-Yc2Gi8ObjZAzD0byoJT8lkmRfYOYwXkFZOAuLiNBpnOYptYNYtArKhECLUjn1MUPc9ldN1mb88f3U9mnO-GhX1A-eUnqPSbq6JN-i9PAK6iyVlwRC5EgmmM7z-AyoVQy1pj0b9Kj7nfc4DJHdoQzG0S-QbtEHsPYuzmH1O5Tc4YJJByXJnjOwur5uWxJpnf6O1fu-4YBiIOCgzUEedRS0vREiTCkvY.%26ch%3DAQEAEAABABTX_tUXnmr30ry6rnreWN6hMVwdxkK7iTc.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 10,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSSD4HFFEsZOa-khgGwNYf5H-pMeZs96iM.%26dt%3D1727859835942',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL7AvLrKwjxI2rdiHW2iVqxy3XAr6qmtuq4GyiX0IWQneSOy_Rt1Y9iKAQpDf-u-EPRJSk9K46ZgOcou3xV_D1nNVjRSu9AzQMhe2bmP1jwauRkiLqibrK1tfLhFxj8dDJwrHRn-Pnjd481ry32BZWqypJzrL2PK4tc7io9UJTEIlNzop8TRwlIl5Q6YpzIcjp-LSLd9TQcMQyN1EwMUhxU1a_7vWxtEL6vZcHs1pb3FpDD79Vw_maiglHSJbarzSloR95EW-S_2FG7_5FTKwDVGPoMHS4NLozyPlTs0GaHVxI3mcvUb6UHD6Y3tl1JIMb4vKoWC9czVPGx8J2JqLbjnqHk9-Z4yfWK07RqiqJFshisn6SbnMoe4Lqj2i4IY2ZBZAt2I58qGismQh_IPGZlDdzEUj1tvtvmuf08ainTxI775E6zWiYmxx6ok--z8iPMw7nGDS6msXEv_mLHBASGFrRKS57zuyvpvl-AoVK250lClXz7egRZ6JXphW0YBiIOCgy6M7rmfjW0wC2oCeQ.%26ch%3DAQEAEAABABTQhZ7GV4FFJjZN6uaJn6QfZ_W9SHHftNM.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 11,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABScx43QIpB04MTkcg7w8V8yX-ylVGdBwbc.%26dt%3D1727852354146',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKMA4aB38rWQbZf7CX7DNVRqRlSrMXFIc1JEk6IvaepttMdKDrR33TrYa3fSd25O6E01M_el7jncTGS6hLjfqzOSqRaxbIFpY6ZyDw8hz0DKHfQZKF2XKxhvgDz35NMmuXEjZp6sn3J8F78VWvNvVdcxfbIztwYVQTi5ObolNP4H0BuN9A3_Y6NuDnNdvuPkzD57_47cLz0CPZvwhN-sVGqlV27fsARS2UwwHvLbAEFXFgXFnaWmqODkfxWat3CVVRdp5ogJxh5k7IpUn32Wvtz-xWFPIoxFZ65cXmD5fP7RBBH3mMKUsq1CxT8CayJC2EScUOaIttMCm7_BxLJ8qh7tKL6R6hM_NIOCPe4gjLwPTfENtBDtIc4whD-Jr2o7nML9sEkbR7hZgOXUYxrNIlLda3LcQBNkGXjyi2gDNtRcrBXvkvaLU17VjxaC-IDm1rVPHFOI99bS6rXVtaWRLXBgvySUcFuroebSCXi-8fjPwFqbL-v1A4AKpAh75emHm2-BcAzMiaXqZVl-MBuZhgGIg4KDBSHTUiKDlvY0gL4Pw..%26ch%3DAQEAEAABABSb56gwgQYDYWOriIuvknr50n9Mz3yzNNk.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 12,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSmx0zUKyo88JjLXO_D8iYlxd5euxoFlLk.%26dt%3D1727889512747',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKaA0ijC6OvKdMZ9Uld5EG2-mS3AI9X2M0lKml3xlA_S-JS2LB1HrADG9IRTdvr_ppK44aJPJ_b7KRjpPfVW2wfTfBK4-f5KK7dHlstrROrW3OLW6WyoA_OtlkFCRcOF-orXpLTjYoZ3PLIjcja2wsxOxbs5HsgdedyQXecmYVmyT7z8z3baubGQDHQTOZdrKpw_rA3Jx5wyWY2spoNDfko3CuBXsVUovKhzJt6GWtQvyI64DC8SfOvEzEkKqTCQQSYmvqTBS5Uuhmhw-zUVzFSyxcIG089U-ICqAvjr9gap6Huu1YzKgejEZLi348mjcyWzSa7UKLwb6-vZ_sQ0hamOzQkaJhtIP_WWnf-VFLDnJrwlTH5Y2sL9B5xFmHaqEHeynCWCDm2nevVQLol7WMI4cw0XO2KR6xyCSREgBpEOdJ3UHBPzQhZ7KZx02eSKoXLdr-FhZIiNiDd15rS_ThF-smFB-fjuVWxsMJT_yD162KfkvSPKHwERWICwGXlcIoiSu42TeC8dZ0X5G5EB3jGoq6xPyUcVlcl3PjrGAYiDgoM5p3EJYlRx_jUZUno%26ch%3DAQEAEAABABSve74hajIO7WyEd3BPhMWof4Q3DaFU_c4.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 13,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRIXie3DXNNY0GQyiug4jiREJxYfC8CE-Y.%26dt%3D1727876005409',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL_AvRqBJfm6H538mt06JkrxXKUYaYIVg8rO521b_7xqv2tq1Jp1Qcr0AwMvmSX94phdShTzGvfjXkI3qts8ezfCGvqiaOvN_CtOHDSp3BSRHb2CfTrGmrxyBCcPtWsKxLlOybGLn_CZFSbg6fp3pVPW0RzWi45KX0unFrWUocB-1_Vg1ETaRZYWERDXJV38WduMadVg30rzO0eK777Blyi1J7jt-E6aEDbgJCOAW8Ib09WbAgU6VaEFsTX_junaU57n3OwdEkNKelVIz74PLRgVwB_lQAjSHTs9D4hNtNYxpcjaHGeE40uDLyqfzPPJSLBuK99xTkOGurhW2qEYgIFFCPG8zDRWwdyhLme0nHlZpWPDjhqyxn4e8GSBnG9qEegKxYEdJaliYVLcEZt8hbf4gN_5Oe9QHvqiFX-W0PdynECbMPN7gPJbFrJt0gG3Tt0R0lZ0e5xxCSzTlnvHBS6OMnVuEyzw7uStEc0xLqrSoy8iugIQqGwpgfDyiC5sLFkGAYiDgoM_0KyFntA1C0_pdTN%26ch%3DAQEAEAABABSHXq4YVELRhFoIJ3gJLyyUCJvAyM5QpLI.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 14,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRI529FR3lWmu4cym023NoeWUg-Npqn04Q.%26dt%3D1727889586280',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKdA4a-oqDW8ZGqiQRiYnS7WGyjFDnkwXYacQi38jRMvKdeXNxIZLnxAsJocz-Gg6rvXMHuve8gKGEcxjhLd8TjdFUpkBGhzjRlsXML49HXV-nJzFjVZ7sA2oRygxyZwFI8sMl72eXYJWzTA-CZpQm4vjWjY3etNUhu7VjYWP9ydG-XLMdj-vmZchCA8scP7_6MFi06udKb0pzwcMULgbvs6REQ1ESTl6vJhf7cvwWJ6GjX5m_-lU70tfCXfOBUHGDMaRt3c-s-dFUUevbKmSIagA-_gfFUXTFUa6XWVYhIU3NpdovWBM5VSXmcmtNl4u37Cq8OskvR36Tsgh7zfbL5QTPicIrSGju6A7RhZmTGkJq7468FeK2i2eq02__pa8aPPTGD8xRg4h73TUrlJWGuZFc2Gu9nuTLMXj6wlvNd1lxXcvpMeWNT0hjGS4FwWuQoxtTke8RZhe0v6F88gN2rmQddibaeio55KM8t9NsB1iNqhvIO7RG_md-9n8GpJcO37ToX4wZkc0mJ6WuMmIH0rsCqOXvTmvvifj2gF8WHGAYiDgoM80JhxGp2auSZs21w%26ch%3DAQEAEAABABTxUbTbyrtL7ySu-S8EDWsoEdTINJl1WRk.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 15,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRKMzDJEZsFdEi6j0Kvax98uVtTNV0quT0.%26dt%3D1727875820890',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKLAzSK0-aJQGY1UMLY6RL3KgErDSvX29Zb_PH_vFUT4ZHQsZSnGlOU9BPFrGFsjaNDvIH4a1ny2iuehtav6fkCQh5uTMlpfAoS6YO0_SaLuoO_8gSXWiZ7K5krqz6ghKd7V6YOD9T-Rr1usb5CZtAMWebLrg8lACxaRHQczJji1u1Ovje_L4xlyH3zArIWol89_K7x4vSO6KGsnaoveFr4ESCEFxO9zR8msxhTyvfacyC6Yx8HdffZOMkzH67X0oVjDOsvC4vj41AmE_zGFkuUZCBQWq0_JemswsYeWbe3onP9Co9OzWW2HGNNP3iI7aKR3BtZwMPtP-3d10u1ZFfvwbZNKQCqIYPskT6ALOjR-wv5dalTdv_TYvXbmhyThTks2P4DFu9iLwdVyc11cKqgW_NOOooaW5ATpLcW5MhBADpTeFnYLfNBvbptyBJyEbGJk5Ag1xPHrufnnPklhq4woB4Elfn12Rp7yuPJveOzJsFGodqDZVJbmgotV3B6WiP4sB0chu0bIVxahjTXGAYiDgoMVfikjo87hG8bBqSc%26ch%3DAQEAEAABABSPVlaxSLZyCmx2bPRa7ZmOilN1LIOHoEA.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 16,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABR3DFIVXfJWoaYz9M9hMsrcjTglkfA5Uf4.%26dt%3D1727889647417',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKfA94RYR2lrsy8PH7mcii7zuIv3_HoLxmFnV1hPn8J7Y0iYDA5nXQwbPnEV-nfw9lVA6rCWGx5oxeeClJvPIlkEnUXrqF_L1MQOhPcvKde6-4z6sJNG2UL9hVIebh_Dlb4FiwNexnWY9J56hmJx5ZRT3bGTJoFrnr5ljTmA2Dqi8e7HWl9TADPfpU1L2WtMR1dwHYzC7Ve2Wu6LvFASGJX0SLs2lPEZsCMp53BzD85ZOow4bwFwXsuPReCFrOWWNTHZRP_XQ5pjb8Uxfhri126dFJ6BIjyNXPIkpEv8WgWDaA68wg8YQTPEUegJnWVfGhZVoaL1lb2FYmkuD3xTUhkN_UJAtkjydn-nLcjDI4US1LbP5zCpkYEu_3oLrSKfg_TJ0JFtpgAe7GgIvn6HPA2IRrbQw2zF8CCfWLrpLNPXrmfsCwlujDDZ_xU5_hafoBSasXmP0alOVnDwNbHPIRgsCn1B-HbphjA0KTlHP-2Awgo0x1HAvRb8Mx_oZdpvW1_Kst99u_q1pqsSkLGbD_pfNDUaZ8BBbsE9MjzBc-OLlgYBiIOCgxuXCLQywGGGAcPNHQ.%26ch%3DAQEAEAABABSjkd4_NlxF2-HDs0qA-UwdpNOCkK0kmwo.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 17,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQKHvswEFPwMh49RGB0GBdr0v0K_wIyREY.%26dt%3D1727875843811',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKFAyvamWjEPeDgQD2zJNfAXsrxEdm3bx3f8WBR-Dc8rIJxODG5YI17Od124P5JrO0Y27mHLP2lT4-skK5kDmfehHrdfYN9feRopdkqbFscXlc_TWYGU9pNWmF6R-TIaHhC2FIVWtSIIwYhq8rWtMYAgrlx3R5a45gpTZDeQmviQiqlHL-J6IbIvZVJfqL4UJJjuEyrb3OBP3nZAdRJMgKhHxZSbUREx0XdPh1KQ1Yzqg2s9ToBRi-s_U9duzWP2OX2J62ZEqbAcPGMFFiD9xvFs2Ff-uDo5hGJOZsgJn9Otf2ak7dIancQPkmiZo2NotHWwTVIZmZ2UBu3PymzCzQ0peNko_kf1CAz4XY4ZjuAH5n4qyMBJbw5K2UxyouTGcDchIWvg3CsW0u40OyTuJBglYtI5JP7xR9nXKyH2I1VCnMcwfBCO38j-3tj3uAoJsd9z-ATZZT4PRUC1HBYXQJgNX9qT8To1jf5Y5IE1-jAfNTTRSp_XaPks5p6NqRT6DyhElVtxg6oGAYiDgoMwv8mL3_MFJwnYSpm%26ch%3DAQEAEAABABSzGsltGlFCHpkBwhpICAQoyjURi_LxHdM.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 18,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABR9rB88N2m-L5LqZ7DB0aNMu5hw8woZaoQ.%26dt%3D1727876024898',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL_AuDqdic-4ZbbLHef6nvP47jb9Q5YYcTZ-WKFdGmNC_wz_MHhiImkXCeyb4bamMq8gfDBLu18eBNUqzPMxxSXZ44A0APE5YBky3U25vMP1g-X9_EDWTHg4IZcKRkGLtqCYBSDbVJIj6Cq9IIVTmY0xtOeGhMaJhvAHooGwIpLsQdGMlLQYkLN7Eb5XJ3JBSvhIwuLPUTi6UTpl_0ybnJsDVrAdGEHvGrBul1nSS4to7LO1K_inerlda8DlT3UxAc0IuaIXTJZYhyegxeDIpvOTBoMqCwaH8M24FZ34XtFVR85-_aAD1gT1Tp3fWSmOQ5yD382SikrGcm724FtzVjdmCwjGQnmDXTYD7r_JfJ5kqZnTQk7wgqHE_pCr_9isPdo0qALIjjX1MESFFn3yNVDssvG3MYAp6Tr3WMso1UL6DhmRvptnxcuHDklEIs8Ui7zTIOh0eRGT9CA9dNHyVMT8CdT08i5VDLO0ESvynszjlZJvIerWbi1NZDrv2x1YJZNGAYiDgoM4c1lyug8q9AzUQvj%26ch%3DAQEAEAABABSTZZS9KbH42vlHeaHZrqdzANCq39eb5UA.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 19,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTPBqCgFvIb6q9wHqoIrW38TMRgu5_IGAw.%26dt%3D1727889719806',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKeA0EKRQd3v7sPoiZboGVSHn2uSYdEwVV56QsTY5KAxyTATFEogt2iomFPOElLpbsiDxWCMMrxKQ66u-GoF345eOxZeINPuKwy3bhVtK0BFM80H9HVHti3JV3Jmiz_Jl3RE_AS8-EsTvzYaNLaub6YWZbxdsz2kzxElzzUmCZ6apwf4vt7e1uk7xA2xD0rJU5Sj_09K81zuAHgdIFSwAXX12PUr7980hxOzv7y20gdj_a3LWpvDRZPS88RO4JGaFmXNgfLAN80Xj2bdgGuh6wJnH_m9wk_ErTdTR4XPFE2QRgjDAaKoHVvlp-nRKZwguIsVY7bLaX6FO1MmQ4mSwJdrWWZ2Lu_kNSvnWHKAOA4YrUiG3koJGkX9TJkWYLbJfr83u5Cp0BeMIqLB8mMBUq6TppqyXK9IxVyCS9HT2xCI0czcwPzIIBOqmrrk0AzZ3SV9WT4wZ8qA_bi1P16OXm_2W6HV9LRW-3rdTpmZXgURnA5Eu9BZ57WnsPX8CtqY2MML9W3UfWfnFWllWSswK4yF7SoMnyMmMCl_kTcLgXElRgGIg4KDCEqjqNWGo5_GPWQIg..%26ch%3DAQEAEAABABQn5QZQLdyYt0QoB__cH6LP_KpTgY96hLc.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 20,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRDxWSUgyBrP08qe_QLpswWuXlgIIja_08.%26dt%3D1727875927781',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL8AjVjerntzm90SInMApl5D1fJCZmU2gWleipgi0ZthHOGq20_W7Gi4lHoc6R_1S3pqYij5BP_ybHCaHjSNnl6JXSbvDwKx_y6XXpKfDy3W_KO6xs-XFf8pCyalb7xJT2K-FrdnSHJXQxpHGsfl6pfkVl6IeeTvcFrzbekt3hyJrS5_g7_7jpEqi3dLU3oaxA9FaivkMOpq_zsueUSPtoaAZs9i7EhMyC0cDsWwE6sAyf0ZA_WS-zMH48gyNqosHDK21rUQhej9JbKMoy4WzY21W8N6Rrif3Rlb2eveU0FqQjgzwiXqOEG2rD_IucV6VJElNh5AStnghP9_0cPmrdTGioNtJ_aes8o_KXtsxJNzspj4y-aww4gJV4aD8nVzNFw8FF-pEgh-kpj4YI9o_yJOQBlj0XdieT9ujVmg8ylWmSwYlYFAkGywRDdEbd_-STVfwSWa4XZz607_Mh_ct7l1DfHBhfGWR2ORFfCBxsD0WegHlMItWZrIrP7iyvtGAYiDgoMWIwZf1sQaW3KDfpL%26ch%3DAQEAEAABABS2iZwBPN2mB5zZtp_GCLHCbyz6CUjov2Q.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 21,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQWhPwWCDD3bCqT6XhvA2-2yj3DM1yFneY.%26dt%3D1727892988371',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKNA4qf2-MphnW8esbKT2GOa3xS8VV0toR1Jo5c2o27oNPyAXZSV0l3JefYsPqr0vLnwbUd3Lkak9ABOEFDeZuYBuNwXMi3Jkjta1IxfchOf715-AeKGHWa-jugOBMt0QCrJb-Q86bzrOaqeIS_DjzBsaOLm7X0zv5mEbRaNNmmDkf7l9M6E2IdxHjirYkCo5cpXldT371K3qf1ERR9HBDZYFLoujWlBOjl_Hq2dRKr1kM5GqVd-OCE5GZ2z7qmEAhGBh1yyjb6omS9XZuLKX0nyu6lZBFD6ISbMiEAzCzxBk4SDDYdUfFhGUly19uIkJHrk72eePRCyFZjbbimUKzGEX68qzF7OPJLBjWjXnUyYenM_ZFqJWRIaFpZjnuxgFEJyCgIni4X7LcENuYwwb6tYvGbZ_Fem-IPZ0SjVFbQrxmbktKJYDA-YNwg4NN1RbR5hYBzRUE371HOQgRlIcGkVJwZzkaQqV6fbi3UZnB7WRHTpGR9FKLdtWouRbCyCluYAuJbO7BlLEN80halNqsYBiIOCgx78W76qfoPoqsUJ0E.%26ch%3DAQEAEAABABRCv4TQFBwj52f15ixMiurlrfBuF7pKEZ8.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 22,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSSPpN0CD-6cKjoywkFauMf-2Ta_wWnWYQ.%26dt%3D1727875947956',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxKAA9dIF6k4MrAjvdnz070PTzE2nSORj7ty0QaCjOp9IKpVrCA8yYP1Y1jaML6sGjtMave63lXzcaqfehuwhOd_f4g_GF4sPh9cx4kzUrNGY95N1lakOUHeEIB8PQvNxDyDjSN70P1NIoIJZ-SZBzOQPSW7ht8CqxB-R4f5ZKLPzBbO4bYbL02ZWYz1ZaptACQpOKeDmsViDY7fbkfsEzuVs3KfvBdBhle82DNKMOLpt1B414anzevkO3BzT4Rc-DGyln2BWthHSBb0AhfBZ9U4EVwNd9GBI-3flsfEag9GdmtJUqxxLiaZw5dq7SaSXEPW-ls2Op51WojnfJuwksbNb8RSENyi2Rd0j8WfRk6YUvyspcqMT8zrfWBgFCL1B9ahW7mAJBQjjXhxrD4dgydLMr6ECiXqNP59uJJa_qJElPYnfrG5ZPAJrvEVwo7mU6BK0AllwF7zVvW6ZT9G7IwDR8oYHD42qR6vYu5lZukkVlSsKrZPGohi-IsZcC4zm_bHJxgGIg4KDMtK3nxjLa46VYJu1w..%26ch%3DAQEAEAABABQzW1KYOflD5cWR7h3-XfO8ELW1LcIGP0Y.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 23,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRBkTrKOd6dOy_8asxQ65_8Eg_RtT7h3gU.%26dt%3D1727876809479',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL7Asu7VKIcz0xw_jnGZdMhvfDHmFIJ2dEDgnHlmgzkL03cv3L6Mre6fcMm7tU2PojMih1T6vmX0lWwhyrQKK83zzjDoCZWAzNc3DTj84PAk_AGLRtBn04Uh8a9zdeZlrK3CdJyVTEhXG7sUvtd6Yai3yN1S1lyzg6jhobD6aWXCbZYQCl-S9jbjN-JYzDMsRfXqMZG-RRshGsyCGIjavEA6-CvIeOOXIGx_EpgQ0leer-rWJSG-MW05p-B1PueH1LMEYVBfNUTbmQ0wHJ1cLAtUv1BDfaJcuk_a8RyihgF6QapmQXcgfIdMeGZ1mlLilq2sCfFLSoVrjbPy8JuyDxRS6FPAI-G7komuOuKVM4ZgUaEcUJQeuYBIh-ZYsdJL1vRrvEulVklkDNroT_q5UiwbZFkU74BOihnPPyNNNMqcUVaAAv2enaedxvRcLo4XEdK5di0v2s3OXNC0U9kKIEbhT4B2fBh4g20GeR3kT7BWnw_6thpwLhozvTEV64YBiIOCgzT3yJTVrIeB8DjcyM.%26ch%3DAQEAEAABABRGU60ZfuXXQ7fFlihCkjspEPNnJpCBzAg.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 24,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTNJ94sukOIqnEDjp-z6iD_7NGv8NtbA54.%26dt%3D1727893070067',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKXAxzypllSmQgkrM9IKrlrrU1_vK-1M4L4S57XwUsfSQvpxadDbyWzWmuD9EzsOK665x1y6W6KprfrzmvJn8XnJgY0kXWSek-nEmKUjx6L5OqfV37EpgQLQMQc8AkidGcMCY9_TA5UaPNoNyGn7jjuwoBqkbAL8U0iuc0ENsHKnbZmrojLqhal7T2XPtlKFkntSRdrCzkULKBePpXoW-KyLNrmOP4NntuAlnztwUFkNAfQD3huBLXRgMPVZL4hMtw1I3hkPBc14JC0Si6XtlsbfI5r_09MB9-Y3QeoSxoUIy6I7JBAltcHBQR0TOHXbv9XYdTsA9_p9CgCBxlDed2OCndww1_qBgpVFm6_PmGK3THYAAeWXzWjv8T9JSmfc7ZbCvW7i6Wai76Kygf4nbiEhAfK449pUAwqFwnp7aJSQgMi36-hHT1tachYgJAqcTgP8ioga0CCXSDlMDLMCLSJhuz44zbGu1DKtAvtdTrDaj2g8eIBUNnU3nowTb9ocFWsZEXwRDP20WGK9Nb8G78RK3M0ARzScKkqGAYiDgoMCPm7xxCrVsx24nD7%26ch%3DAQEAEAABABSNaavxzT7xuseRigMjClmwLIvP50Wz22g.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 25,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTOjySVXQmAo-Bw0_324AOd_Yktv7srU8E.%26dt%3D1727893094591',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKVA_QCY9KHgVc2Uq3M1queIvGBiZn5fF0uUKZJqTqoy5OUsJ7TTWQthGegexrv5gGIZC_9YRynq9ocAuL1PbDnqck7HNLdTamnAGNILAwJ3EpgK5NRYTW9SE_SXSeiEBVqqlhOQpAAZjLOADlpNIdIrph_fTi7hen081w8JAlcn89ZV6lg2dLR2mZQszNl_sBkCkb_Tc-4qUPjTiPB2k3F71zqNq5gCQeyWki_vuTs8MsqVJm9niFBGl_3SBQFtrYp3lArUp9aMs7qZYla2N5nleI7OS8ZBilWvYXvfUhvnnNALtPYO0KzMT_NCSeZNSFmLa8eGaJjY3cUdPUrrjYTXrtTXftyzyLEuQ3VA6yjy8y61fKONmJb3CsDW82oX_HI7cIwpZ6Mx2340LPigf7H2vTbkaC_ARplMlx8mnn9oJRk8WfTb-HAvppMnP9sV6NxMxtVT6tl8hXTkUNcSl-pK0HT4A9xAkyndQB5_Ttk6a7iyKjH5q9tTPR-k297-eKae747IfjV_s6CWbzuz6Vre88Ix8XcJBgGIg4KDNUiyGvUPz3BO6XdKw..%26ch%3DAQEAEAABABTZjC2ke7V4AisX_ieJirFuYsjCAL4BOQw.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 26,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABQwLjoJi-z4B_fQvNZIoNC42LxCbRzxiR0.%26dt%3D1727893116603',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL1ApB-GNaH6ZTnvX7-D97nbmrnxjVDF-MbMZELiB90PO3ipF_DouQs9TM9Cv-_vFWtZnn2jsRhuuRs-uDYlB3fBIOEQCgFMWLoGWf2MmvPNX8xbl3mjBfXXMR9CBoTkJI1CVIrR1f_nCfrWvPsqwxetCt1vv6thKPfnlibTc_wep8M8iVlSnSAwhgfJ-I9H5LVQLovh0njoXIv8iHELpnNiex_fs4lJel_LBCiwFifIBhXVciZUjsJOUI-rQ3qpJMWAczdTxQZFd_jCJCODJwijLmsgYuFbmbjFroROyOnlxRacdZTYQVFhGnugbBMRRhqiCohB-ISZCPvyCRvlmmzQ_Bo14S2YY52qETM-4xu1N9csRNy5nIG0KV7NR9t_OZEC2oFq2rOuLdMzKmYY7lt6D4y3uxJNovMYQ_utV9aJukBYD-Rn14Pp81RpMRIjWfLRiy_X0W4hW28ZwDB3mYNcjtq5KipJsKWmCagf7-pIacFIKRt_XIYBiIOCgxY1BrLvEO7VbUJU-8.%26ch%3DAQEAEAABABRYpJtKmMDEuYfDsvJZV0NSAdkgyjRIXXM.',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 27,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRD0KrY6IFnnHZkRjKAJ33jfjGc4GTtrAM.%26dt%3D1727893146389',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA07G7rpIgQ1SlWAr50uTxSQQ3xJQFsRzqAp2gvropl5jX_cXuWO8NPJyyHLNFA8twAEh5eixsqcy_4KyW7q1bJOhQqtxnQGcZ-vARUUoWyrRbXipE5u3oh0jHSj560eON_LY8BQBKQR6xea7vA0AmhcG7S9DRkHgTkxyWfd88Y94k8wmddHY_Jdx50AyyCm2KNti3hwLie8_8mhIXaZDZiMLd_PrwfgS6PTsTVHj-7SFwPrUv53fP2mpG0fxUWh9oc1lkcaSsZyzGHky6qjDfbB7DB9LXwFvA2kfdUTHnLozw8H9fEKjGnoCzFFNS5UKjSVB9FmU0WzTh9S63lvFNc4xHMFUvp3IYzV1gjvcJGScfuxFizI-E1nlkxy_lChiKVD2DcmKYjHx0AFwSNEP37pp5RvNtGCcOxUXgv-GXAkZ-DC1zXnOROUDxE41k7YQngHwTOLioA-88kNHlhFxQsdUBAMB6CCweWZv8iEjst6vq9wgbwFLhcdjBh_Vz1iR8HX8l8xgjoPQ2cLpgRglYrm71RnqYfEtItrIJRgGIg4KDHHCEiU7PjBtcskE1A..%26ch%3DAQEAEAABABQP54h5tAMVYzcpIlF8JUxY_FtaQF2Eev0.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 28,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABTdmxXquKrsUx4Uxzbzp5L4LiqYzOwg4c0.%26dt%3D1727893186791',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKaAzNb-Uby7cCNFwnl2RfszJRnCas_raLfVpAz8TCmCEml_YRl6grsNoc1rCaFMLpqMVjOVWZU-wZqPAqW5PasF0yrbxmOdLR0bHETIVZ9O8ySLfRsDCiwTUvUeTBHCBnmahZoeh6vB5Nxbw-yeeidGB3XdvWvEndSGtkzZGWGT1TLstqgH1nFxnXdEYQVdbIr98eb-tBGSW1jHwYGf9u3e2EDebpySJv94REadt3kIk_X1Pu7C7R8TSV_5HO7RYu8YD3KdP4VHPctQBSOT-kH8neoOpIV5iDS4NZ0SYIckyEfiFUr_-KrSDMwBcZ_sRUcbb3WDRckHIcweLK8vqoSUlw_H3jqwtIKP-Bl-Hn3DuezLNWQVFHngXFPdqofAHrC_5Js0G_pMycZI86kLkfvno9SLJR7ECdI4x7HuodZ0sxzg9DIlaTpxme41tXGiqjk05aEeGh5iriQKWGJLWhni0Fseln6RXNvNkFMUlc5q5faiFNLfQWVzjY2kzmktjJPsKmpSPUOYmg5y-TqFVjur-oaXVRKW9PvcvD6GAYiDgoMle_d8VC2RDv7fO_v%26ch%3DAQEAEAABABQyrbmOhn2hu2a8UH8JXSpDIB8edhmXLAw.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 29,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABT_EquoczV_rVnaXaMhfDH_Z5ZiV7hZ1JY.%26dt%3D1727893208403',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA6sAojkTJx8qdi39oPb62bqX9kQgCCW86we-Y707A309dvIoEoGNzDZUpVljw5iXgg1iTpKTBB49mB-JmltNR_wRrTFJcdJywfKyBgin6HuO6cKAQR7pIR9-_SKA-1O9jXZxyIMy88SNXJ73Gu6Fj4BItHFIPR-WTbAB20LOZgeZmtHJ2ROnGsVEYOoOaIIe3Vl_fvPgObR6c-qpzT6Xwc4vj_RM4SAjlPRkZc22Q6mg3dEnj2hUrcpu4OJNB5JabCCXsgRnWe_V7GLLjACpKCc7Xl1k5OpISPZgAUZ0pZ0a_gN1aLjuX5GmHjh0a34-FySl1X8F-B5xGtL2ncuLiBDLrULhbqXa1Ol6W_B0oTzTjmNRrc5lH9uOyOOS-mvTj3wppQeHDTgIcywvRnGljE-8kW4P6mb5NiYEZ3RkN5BWVfVQ3KtWlBfxzWkYA5s6ZnpQOjfhTvjNHnHNqZkys811bimr5V1Bru4tRDqK61ijFnF9KrBI47Fmm7zojkccq3b1lmD_HXSradcByfn3yFtAbzWDbUZ3a1aQWBgGIg4KDEvF0dVkPeVOTxWhoA..%26ch%3DAQEAEAABABQC4oRbfVjqddb21Jx2V-k3cRZsdxLfXqg.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 30,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSYb-TdjYRFQ0b4e5nnbB3FGpvighU3laI.%26dt%3D1727893230873',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKZA-mKuID0tYDoIzVtB2gUFhimOG5u49-idtdEOdl0bkc7jTFYoU7792c4YDplzY4uOFj9u3mhMeYS71V3iRkEgSWXIKGvoSlbXn8stMSRoM3MKwA0h6A6RRABNcrI6pT0G4cV8BMgTUciQCb2i8FqB12KXBGG8opKqODCux_AXy4OZe4iySn5PPcfSGlXmhezzpZyfmM6vDblcRzIzQIpwx9psnXDzYC3by4xy4rc97v5njSoDJ5B1DyeTgj_3guSoI9jyiXeF4_gMR0jYy64aoThp8ZBTJiVl_98dyniPVaS9gpjFziasygPfbWSGfmSjZknQaU3F2B99yi4D_h_Far0K82scZiWQD5e7g2ICqRTH_1-L1z8rTj7v9UFI-N_xD-aJENckIR_zAkf6xGOYM1gEOTti0yv5SLOvD9w0XNwx2gUv6I1kbqSTkTSCaxstxEiN9YDQWPncdGTTcYI1YqgNjS-33ukkR9ilzTrqDsFSRPJ_46zTH2DakB0TbuD92ly8RShZ6JjQtUHY15tP1HP_fbFvdD5VJEYBiIOCgxgnlU_fxKimYwdwGU.%26ch%3DAQEAEAABABQxBOJcv49M-6ru5AISjzzfg0dLm1su72s.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 31,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRjWf0aWKWWRiyLBu0TcQMwI7krgdrHBSw.%26dt%3D1727893275604',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKZAxNrOdRc3ICIYfYHn8RCrzuakqQN0O0AYep-BRgSOXV1gX5AI5P5qMUWWTW5NM_Z4tXtnt0BW7oqMTBugm5IRh-2P-NnbmPBn9E11rT9ctFDg0f4gIIIoUH2lfrV-BUSVNxBH1s-9lOqeuQ94n3vlfmtkmYMb-IvyD8dkUEqx3G3GGhefOiHtBZ1JFU-9bsDFcLJ_ilYVOjX5keYEkmWfhXspCunHG12lYiOLiNstuOUjnjq1JleC0PSaTO-YX0A35qTr9x7IastLC43Umb5bR-og9AuvZMTAHYngKABvPVQXD5S4r8MOfWBh60Bfmg-moRT--nxvI-t-AwhTXXIOmfUwR06F0FcehV6g4AEpqmb8rqT7GJxOQq8E4mv4iudiU0lf5gFYjF-cXpnn6vto-ZiLB6QMaxdU2zfKAqHNbOat_WaNgrdIHeTz1tOUmeg-EAAaf8Gy2mhJ3mvl7UFE4J3J4Lzi1uFEuc9WzZnJZfEpEfLMfdeFEo-UuU7Q2vurZZTLQm6jvvsfBXF64TqxZPv6YCf6K1GgZEYBiIOCgz63jX8wtmcm1Cf708.%26ch%3DAQEAEAABABQRrWVLOvOLpBYRewBQ_ZkOny1A_9lU4kc.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 32,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRRk_eQ8sOpwqBAlkiula8X5OM3XCNkX8o.%26dt%3D1727893295705',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA1AC5ZES7KTYNQnoydjN72pAFxoVxKdyRKiFCV-RFN0sMhYMGbZRdSrUKwKH0x0mT_eegG2S9YIkwHNKfK9Wc30g3ilSkWzOHahtNQ6AKVYfr7NdqjX5jmlvrFrtmD7c5dKeWNO-XQqQgs5L_xxE9OpsbbiQxHo--FMrR3YgUc6JlPiLTj9yfFSDbSYCZAHWbA7qlUiz_Nwr1av0_h_aC23Aoy4waaRhIevZDPjcDgD91vcH3K3M7uehSI0s8PoRk8YBYfwjdQ7cbnrcieECvhOP7RpEISLIjAd49zdYdmOBHBAJKyfsLhrZmn8GBk-Ph_gBixlQraWPdQr1WFWHQpA8TOC-Im0nyET2EyTxCLE4HXCKvxfGJe3pVq5Ku-adjwndfaYPQAzHiN8fotbkWB_R8vMANLSMY70o5Sdk3gcWuMYavk0_wogqwVvUM-eoeN7IEfWN6zZaDLJnZ4Tk1Wn_Mteowf5bl-h8ps8Xnc3MMul7LKq9I7EDrh2cgop-cHJIs1S81zSOsIM2HJpiswZb5I_mWZiF9Um9hBgGIg4KDPFfiKNSwXIpG42imw..%26ch%3DAQEAEAABABQisvtQrDwjmJDiYP6sYkE6TAYCdxrqRFA.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 33,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABRkmCbxeAzNeeRvhVxCGBtxSowBvkxiITg.%26dt%3D1727893346912',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKcA-5oTKzRuTnvE1kLK1dq6AY3M3srhnObjMPGAvdgxTWnPVTkNypJGl8apcWYZKN6Oevnfs7wv5ZS2JMfjTjrLT-7XFCMQpSY8Q65PBHDp9skihljvxBdR7_DuAHsjk6E76KUs0sLPvxeB-G_uKC1FwEnMBSZrSfzZgs6YqddF6tOVeksxGJBP3kXuUfIJEGMmM72NiXDz4uFRfSINKyl1pjbUvrByPg9j-GO3bNkLVuIhgxhAdtYllQ0Cp2rAZ5iDw0A52vlkCvJngNsKhhhaMDZCi7q0S432GVTxXD3r2zUlyXmSbzHd56xFmTBBpc12W2VV9XT3crn9wvde5Gv094I0U1T73qBlzvOeM5jS0ALyfYjQdjJtqnApnwul5t3umB9Yoqam4WIulRuxWPgIKe_8wG24cXq4cySAHJXTMpV2dPuCMbXkHhbQA_Q6Qb0Cud0oyToJPNeIrJW4Asg_CQ1I7l3I_-PxBPzgvLznB-pc5-2-7lbfXrgvUEZdGNI5Lwmvw1yxkn4CLP1ddGDBbk-lbVZQs8xy_6budcYBiIOCgz9xYAr-w4do5JzrKg.%26ch%3DAQEAEAABABS1vK8fAfzUzBlVFhccdPb2LAJXXdwm3Nc.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 34,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABS46MwW6sWI5sgTuZ4zWJjFBXzs2lEreHY.%26dt%3D1727893376752',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA0Wj5WE_YS9fCAnP2yYdi3LTuPIXk2ZNAo_VBn-XGJ59aYd6VyZCa4062lc2Ni1EhCxn7H_frXnRmVyPjdCJXXk7_RNif1ZhTvhrFTuYRg0MiTYr0P-8OXYXrN9KeirbfL776Dx3d_nL73FKpdrki3UAOZvYCq9d2b0LgJ0qyTf4PRtoh3cK8Oh-HhQiQ7lTy7ggU8NjdCT6lSaorhvhRy3VT2RArfLPbKNW-Uy30JfaGAFZQTpHdCatKrDah5gHsxXri-pQZjXnyI98zw2HFaar6Zm16WJHsOjvhYIKAWsGdH79Z6It2vnQQyOAV2ahiU_1_NEZgTsktqy9fO_LWq279YAS_4aSe0t3jURjdZIvR-zFbtBwrkDoeQGC0Pjx6y3UGNPLV1B0t1kr_7DtQJFnZMVFuIfAVy8D3K-2wz80zcCDCZMpkD4vgUdPUNON_1J1VneJP8dGpJ3_CWHry53QxunRq1Zc71APVu9T88cphIlMtDWBD-6Q1GdTq4hyBoAKgUcTkJd6I-3jOnoP6CyBMRCJkPMqgeNwmxgGIg4KDFpb8HvHK022Komwag..%26ch%3DAQEAEAABABQTXuWB_ZVyyNIbjOp_K5aaQ56AkPle8fk.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 35,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABT3JjEVM_IP8hJXFXdBI9Op91YMVwgNaVk.%26dt%3D1727852269136',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'v%3D3%26ct%3DBgjHlOvcAxL-Alo5wF2YtjbkfLA15SLUFD1e1PDbT29qNdpZy-alLSUAQc4szXNEVk9UvMes3PJ-GBEmw7H8StIhVd1bBB3qGjwjisng_ceGkdaUime20qKJoTSTSXuaoTqhDJHXCpJCZWdMU6EGgflK23KEahCIp9_VFZ-CL4VWPG35kGmDM7n4o71xxIrWb1212Y-r7IzCCHmzvuVt6wiyDvTGSuLGxGncFnCPIHuJgFFaWW6k4GLXYZ-gLlN-Matkc2NS5qCOur7rOkSMmeesk8FuassjcDmVnzg7sFF4Q_3xfPJEA5mERvWXpSaVmFC8Btgt37j9fZ5L3aUyan8iWnh05R0cQf9jS98KQwJWunu9-h6pfqlj9pxW_kOD6bKZPbSsVB8I9PZQNejAgqjdH-Lf4EZr96_IR398W9YfspJLFGOPPNmUVwHc4LJudhSP0KaucBXuKp61aJckt9hyo1qk4b9GJXVfYA_c8int0IvvZjiDROKi8JB2GIMoWubZT483ud4YBiIOCgz5uWgIBSfhrRATDz4.%26ch%3DAQEAEAABABRg6W6txENlypK-fN3UABQab38_SdW__3g',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 36,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSJ6m-ZntX-Jpjnxp68IruIKTYGsZd7MT0.%26dt%3D1727893417002',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKbA1Q4CoRGYVStj9qlo2L3XVrfkLY1dJEr4DRN-B1QaheYT4mZwKtSN717gyBexFBaLu_kLhARpfRBmMakwgqjmjB-cwGLt4xdrW9e6dP0N4fvS-gCifdaADMoxdZml3XtmlxVuUP40BatPI0_pxreFMhk4337YPXh8pGPKBOD1TKFRMTyRIgB9UTaRtjYzxX0ItRGig9jNCxY9FnwYPQq7Oc-kvIem0FztvPUKtmD5-QDoHZ2TNNqMaVbmG7OOi6PrpesvA5F8eF9DozToVyV5We4K6zHUgCZo2gCpnYdU4HTJ3qXBgSOR0VGQ-is77FY4A-DeYrcY68XV-ax_KzhzgQYtFb5hMQcoG8Z1N9z5V-CHARaALWbT3dOMjbR02A268dRSVcpDbMZjEKOySTrJyiC3ZcWo8uQsmrdczT7HItdTJ4ohNBmuGJ9l74zStqWPV8h_f0S8GIPQM9aYi6VDt7Liss_05Y4Ds5z50FYu42xDXlwoZ_jS5HXsLDzvgeU1z8qDw4amlttYMObT25wTUCrOpE9hvH_-X8M6hgGIg4KDAb3O5H4vnBbB8rscQ..%26ch%3DAQEAEAABABQMBXYecWAG5iU9lg6jD8vhcGbe5jNcV-U.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
  {
    server: 37,
    cookies: [
      {
        url: 'https://www.netflix.com/',
        name: 'SecureNetflixId',
        value:
          'v%3D3%26mac%3DAQEAEQABABSiOc6nRTBW_T88ps_B_qUTfBftSnwswKA.%26dt%3D1727893440799',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
      {
        url: 'https://www.netflix.com/',
        name: 'NetflixId',
        value:
          'ct%3DBgjHlOvcAxKYAytJbX0ewGaJ-9_WrJhPeznTosWGVf4I8mSQESDwQX6lg5EcycrGrQLLtcqXskF89c9ZxmtklB9TwTlrNZ_oHQ0kMtwPJduF487Ap5eaewSy-B2IJYM_9OMMbEP_ElBDzhYxdmlxAmcHFyhg5Lq1EGL4XQ0ifgWooiofANrIRzJ1PFLioJFajwr3EY3XtcbL1BuwkzLXeDYBQY70swvBLY-AQ4S59gJAen3iIZHKOxZ52HrPfp5rgaAsEOTqyzEn9MgX_ZqkurfX1C3Hi3qtaIZFXRgOjlcbNA8MkDKWvR1xe9iPlqUdPwguPB38BXVZFscfx2LTw2ZrQmZHtRmpc4x0_Mlmvv28kagrgkwqMZhlt8itKHbF6H8WgiJMOXBhGL84QflKssH1enUxEEFMGZvGL0sgVEKKaYenLWc_VYxGr2M61Pw0nBS4vEjuboAn1uYBvO_P34Y5Y89o-blE1sH7QdiSCP8eskai115i6vT5WcRarXOZZ5igVjgXE65Kgmp8jG-6cja1a62o-ObY-CItT_vNR0ydaBgGIg4KDJjuEin6ZsXo_WzVjw..%26ch%3DAQEAEAABABRHd5ICk3J7_Gh7EFe_VbNb6jtL51wcvyw.%26v%3D3',
        expirationDate: new Date().getTime() / 1000 + 3600,
      },
    ],
  },
]
servers.forEach(({ server: _0x298b8c, cookies: _0x50464c }) => {
  document
    .getElementById('Server' + _0x298b8c)
    .addEventListener('click', () => {
      setCookiesAndOpenNetflix(_0x298b8c, _0x50464c)
    })
})
function _0x18a69b(_0x30bce5) {
  function _0x47637d(_0x37f056) {
    if (typeof _0x37f056 === 'string') {
      return function (_0x19e0f6) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x37f056 / _0x37f056).length !== 1 || _0x37f056 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x47637d(++_0x37f056)
  }
  try {
    if (_0x30bce5) {
      return _0x47637d
    } else {
      _0x47637d(0)
    }
  } catch (_0x3d98e3) {}
}
