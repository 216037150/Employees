import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getInfor methods', () => {
    it('should return infor1 data', () => {
      const result = service.getInfor1();
      expect(result).toEqual(["Siyabonga Zungu", "siyabopngazungu95@gmail.com", "SDV2509"]);
    });

    it('should return infor2 data', () => {
      const result = service.getInfor2();
      expect(result).toEqual(["Darasi Mkhize", "daras@gmail.com", "SDV2506"]);
    });

    it('should return infor3 data', () => {
      const result = service.getInfor3();
      expect(result).toEqual(["Sabza Masilela", "sm@gmail.com", "SDV2501"]);
    });
  });
});
