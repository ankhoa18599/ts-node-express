import { Request, Response } from 'express'
import { getItems } from './itemController'
import { getAllItems } from '../models/item'

jest.mock('../models/item')

describe('getItems', () => {
  it('should return all items', () => {
    const mockItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ]
    ;(getAllItems as jest.Mock).mockReturnValue(mockItems)

    const mockReq = {} as Request
    const mockRes = {
      json: jest.fn(),
    } as unknown as Response

    getItems(mockReq, mockRes)

    expect(mockRes.json).toHaveBeenCalledWith(mockItems)
  })
})
