/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

let Canvas
try {
  Canvas = require('canvas')
} catch (error) {
  // Do nothing...
}

const ElementService = require('./ElementService')

/**
 * TODO: Document
 *
 * @public
 * @extends ElementService
 */
class NodeElementService extends ElementService {

  /**
   * @override
   */
  static isSupported() {
    return Canvas != null
  }

  /**
   * @override
   */
  createCanvas() {
    return new Canvas()
  }

  /**
   * @override
   */
  createImage() {
    return new Canvas.Image()
  }

  /**
   * @override
   */
  isCanvas(element) {
    return element instanceof Canvas
  }

  /**
   * @override
   */
  isImage(element) {
    return element instanceof Canvas.Image
  }
}

module.exports = NodeElementService
